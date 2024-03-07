using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aula03.models;
using Dapper;
using Microsoft.Data.Sqlite;

namespace Aula03.daos;

public class ContatoDAO : BaseDAO<Contato>
{
    public override string NomeTabela => "contato";

    public override Mapa[] Mapas => new Mapa[]
    {
        new() { Campo = "nome", Propriedade = "Nome" },
        new() { Campo = "email", Propriedade = "Email" }
    };
}