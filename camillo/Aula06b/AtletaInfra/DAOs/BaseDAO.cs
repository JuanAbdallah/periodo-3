using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.Sqlite;
using AtletaModel;
using System.Text;

namespace AtletaInfra.DAOs;

public abstract class BaseDAO<T> where T : IModel
{
    public abstract string NomeTabela { get; }
    public abstract Mapa[] Mapas { get; }

    public void Inserir(T obj)
    {
        if (string.IsNullOrWhiteSpace(obj.Id))
            obj.Id = Guid.NewGuid().ToString();

        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"INSERT INTO {NomeTabela}" +
                                $" (id{GetInsertNomes()})" +
                                $" VALUES (@Id{GetInsertValores()})";

            conexao.Execute(sql, obj);
        }
    }

    public void Alterar(T obj)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"UPDATE {NomeTabela}" +
                $" SET {GetUpdate()}" +
                " WHERE id = @Id";

            conexao.Execute(sql, obj);
        }
    }

    public void Excluir(string id)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"DELETE FROM {NomeTabela} WHERE id = @Id";

            conexao.Execute(sql, new { Id = id });
        }
    }

    public IList<T> RetornarTodos()
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"SELECT * FROM {NomeTabela}";

            var objetos = conexao.Query<T>(sql);

            return objetos.ToList();
        }
    }

    public T RetornarPorId(string id)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"SELECT * FROM {NomeTabela} WHERE id = @Id";

            var obj = conexao.QuerySingle<T>(sql, new { Id = id });

            return obj;
        }
    }

    private string GetInsertValores()
    {
        var sb = new StringBuilder();

        foreach (var mapa in Mapas)
            sb.Append($", @{mapa.Propriedade}");

        return sb.ToString();
    }

    private string GetInsertNomes()
    {
        var sb = new StringBuilder();

        foreach (var mapa in Mapas)
            sb.Append($", {mapa.Campo}");

        return sb.ToString();
    }

    private string GetUpdate()
    {
        var sb = new StringBuilder();

        foreach (var mapa in Mapas)
            sb.Append($", {mapa.Campo}=@{mapa.Propriedade}");

        return sb.ToString().Substring(1);
    }
}

public class Mapa
{
    public string Propriedade { get; set; } = "";
    public string Campo { get; set; } = "";
}
