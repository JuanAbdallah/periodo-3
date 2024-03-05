using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Aula_03.models;
using Dapper;
using Microsoft.Data.Sqlite;


namespace Aula_03.daos;

public class ContatoDAO
{
    public void inserir(Contato obj)
    {
        //se o id for null ou tiver espaços em branco.
        if(string.IsNullOrWhiteSpace(obj.Id)){
            obj.Id = Guid.NewGuid().ToString();
        }
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            const string sql = "INSERT INTO Contato(id, nome, email) VALUES (@Id, @Nome, @Email)";
            conexao.Execute(sql, obj);
        }
        throw new NotImplementedException();
    }

    public void Alterar(Contato obj)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            const string sql = "UPDATE Contato SET nome = @Nome, email = @Email WHERE id = @Id";
            conexao.Execute(sql, obj);
        }
            throw new NotImplementedException();
        }
        

    public void Excluir(string id)
    {
          using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            const string sql = "DELETE FROM Contato WHERE id = @Id";
            conexao.Execute(sql, id);
        }
        throw new NotImplementedException();
    }

    public IList<Contato> RetornarTodos()
    {
         using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();
            string sql = "SELECT * FROM Contato";
            var objetos = conexao.Query<Contato>(sql);
            return objetos.ToList();
        }
        throw new NotImplementedException();
    }

    public static Contato RetornarPorID(string id)
    {
          using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            const string sql = "SELECT * FROM contato WHERE id = @Id";
            var contato = conexao.QuerySingle<Contato>(sql, new{ID = id});
            return contato;
        }
        throw new NotImplementedException();
    }
}
