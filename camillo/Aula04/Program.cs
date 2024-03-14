using Aula04;

var pessoas = new Pessoa[] 
{
    new PessoaFisica() { Nome = "Ana", Filiacao = "José" },
    new PessoaJuridica() { Nome = "Empresa A", Contato = "Carlos"},
    new PessoaFisica() { Nome = "Bruno", Filiacao = "José" },
};

var email = new EmailAcao() { Texto = "Prezado(a) Sr(a). {0}, ..." };
var etiqueta = new EtiquetaAcao();

foreach (var obj in pessoas)
    Console.WriteLine("E-mail:" + obj.ExecutarAcao(email));


foreach (var obj in pessoas)
    Console.WriteLine("Etiqueta:" + obj.ExecutarAcao(etiqueta));

var listar = new ListarAcao();

foreach (var obj in pessoas)
    Console.WriteLine(obj.ExecutarAcao(listar));

