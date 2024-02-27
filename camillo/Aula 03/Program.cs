using System.Runtime.CompilerServices;
using Microsoft.Data.Sqlite;
using Dapper;
using Microsoft.VisualBasic;
using Teste;

// var obj = new Contato{
//         Id = "5",
//         Nome = "Zé",
//         Email = "ze@gmail.com"
//     };
    
    //reflection
    // var tipo = obj.GetType();
    // Console.WriteLine(tipo.FullName);
    // foreach(var prop in tipo.GetProperties()){
    //     Console.WriteLine(prop.Name + ":" + prop.GetValue(obj));
    // }

    // var prop = tipo.GetProperty("Id");

    // if(prop != null)
    // Console.WriteLine($"{prop.Name}: {prop.GetValue(obj)}");

/*using (var conexao = new SqliteConnection("Data Source=db/dados.db")){
    conexao.Open();
    
    var obj = new Contato{
        Id = "5",
        Nome = "Zé",
        Email = "ze@gmail.com"
    };

    const string sql = "INSERT INTO Contato(id, nome, email) VALUES (@Id, @Nome, @Email)";
    
    conexao.Execute(sql, obj);
}*/

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
/*using(var conexao = new SqliteConnection("Data Source=db/dados.db")){
    conexao.Open();

    var cmd = conexao.CreateCommand();
    cmd.CommandText = "SELECT * FROM contato";
    var dr = cmd.ExecuteReader();

    while(dr.Read()){
        Console.WriteLine($"{dr["nome"]}: {dr["email"]}");
    }
    dr.Close();
    
}*/