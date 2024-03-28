using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtletaApi.Models;

public class Atleta
{
    public string? Id { get; set; }
    public string Nome { get; set; } = "";
    public double Peso { get; set; }
    public double Altura { get; set; }
}
