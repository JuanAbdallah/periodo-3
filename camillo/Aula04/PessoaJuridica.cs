using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aula04
{
    public class PessoaJuridica: Pessoa
    {
        public string Contato { get; set; } = "";

        public override T ExecutarAcao<T>(IPessoaAcao<T> acao)
        {
            return acao.ExecutarAcao(this);
        }
    }
}