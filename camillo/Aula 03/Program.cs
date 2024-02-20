using Microsoft.Data.Sqlite;

using(var conexao = new SqliteConnection("Data Source=db/dados.db")){

conexao.Open();

// conexao.Close(); "using" o torna desnecessario. 
}