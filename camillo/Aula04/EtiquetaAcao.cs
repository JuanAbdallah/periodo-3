using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aula04
{
    public class EtiquetaAcao : IPessoaAcao<string>
    {
        public string Texto { get; set; } = "";

        public string ExecutarAcao(PessoaFisica obj)
        {
            return $"{obj.Nome}, Endereço: ...";
        }

        public string ExecutarAcao(PessoaJuridica obj)
        {
            return $"Aos cuidados de {obj.Contato}. {obj.Nome}, Endereço: ...";
        }
    }
}