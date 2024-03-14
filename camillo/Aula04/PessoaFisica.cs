using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aula04
{
    public class PessoaFisica : Pessoa
    {
        public string Filiacao { get; set; } = "";

        public override T ExecutarAcao<T>(IPessoaAcao<T> acao)
        {
            return acao.ExecutarAcao(this);
        }
    }
}