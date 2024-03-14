using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aula04
{
    public abstract class Pessoa
    {
        public string Nome { get; set; } = "";

        public abstract T ExecutarAcao<T>(IPessoaAcao<T> acao);
    }
}
