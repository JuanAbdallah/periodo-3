using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aula_03.models;
using Dapper;
using Microsoft.Data.Sqlite;

namespace Aula_03.daos;

    public abstract class BaseDAO<T> where T : BaseModel
    {
        public abstract string NomeTabela{ get;}

        public abstract Mapa[] Maps{get;}

        public void inserir(T obj)
        {
            //se o id for null ou tiver espaços em branco.
            if (string.IsNullOrWhiteSpace(obj.Id))
            {
                obj.Id = Guid.NewGuid().ToString();
            }
            using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
            {
                conexao.Open();

                 string sql = $"INSERT INTO {NomeTabela}(id{getInsertNomes())}, nome, email) VALUES (@Id, @Nome, @Email)";
                conexao.Execute(sql, obj);
            }
            throw new NotImplementedException();
        }

    private object getInsertNomes()
    {
        var sb = new StringBuilder()
    }

    public void Alterar(T obj)
        {
            using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
            {
                conexao.Open();

                 string sql = $"UPDATE {NomeTabela} SET nome = @Nome, email = @Email WHERE id = @Id";
                conexao.Execute(sql, obj);
            }
            throw new NotImplementedException();
        }


        public void Excluir(string id)
        {
            using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
            {
                conexao.Open();

                 string sql = $"DELETE FROM {NomeTabela} WHERE id = @Id";
                conexao.Execute(sql, id);
            }
            throw new NotImplementedException();
        }

        public IList<T> RetornarTodos()
        {
            using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
            {
                conexao.Open();
                string sql = "SELECT * FROM T";
                var objetos = conexao.Query<T>(sql);
                return objetos.ToList();
            }
            throw new NotImplementedException();
        }

        public static T RetornarPorID(string id)
        {
            using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
            {
                conexao.Open();

                string sql = $"SELECT * FROM {NomeTabela} WHERE id = @Id";
                var obj = conexao.QuerySingle<T>(sql, new { Id = id });
                return obj;
            }
            throw new NotImplementedException();
        }
    }

public class Mapa
{
    public string Propriedades { get; set; } = "";
    public string Campo { get; set; } = "";
}