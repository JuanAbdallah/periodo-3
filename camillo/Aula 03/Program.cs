using System.Runtime.CompilerServices;
using Microsoft.Data.Sqlite;
// conexao.Close(); "using" o torna desnecessario. 
/*using(var conexao = new SqliteConnection("Data Source=db/dados.db")){

    conexao.Open();
    var cmd = conexao.CreateCommand();
     cmd.CommandText = "INSERT INTO contato(id,nome,email)" +
                       "VALUES(@id, @nome, @email)";

     cmd.CommandText = "UPDATE contato" +
            "SET nome=@nome, email=@email where id=@id";

    cmd.CommandText = "DELETE FROM contato WHERE id=@id";

    cmd.Parameters.AddWithValue("@id",4);
    cmd.Parameters.AddWithValue("@nome", "Daniel da Silva");
     cmd.Parameters.AddWithValue("@email","daniel@email.com");

    cmd.ExecuteNonQuery();


}*/
using(var conexao = new SqliteConnection("Data Source=db/dados.db")){
    conexao.Open();

    var cmd = conexao.CreateCommand();
    cmd.CommandText = "SELECT * FROM contato";
    var dr = cmd.ExecuteReader();

    while(dr.Read()){
        Console.WriteLine($"{dr["nome"]}: {dr["email"]}");
    }
    dr.Close();
    
}