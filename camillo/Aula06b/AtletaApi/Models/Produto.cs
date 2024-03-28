using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtletaApi.Models
{
    public class Produto
    {
        public string Id { get; set; } = "";    
        public string Codigo { get; set; } = "";
        public string Descricao { get; set; } = "";
        public double Preco { get; set; }
    }
}