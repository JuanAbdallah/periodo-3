namespace AtletaModel;

public class Atleta : IModel
{
    public string? Id { get; set; }
    public string Nome { get; set; } = "";
    public double Altura { get; set; }
    public double Peso { get; set; }
}
