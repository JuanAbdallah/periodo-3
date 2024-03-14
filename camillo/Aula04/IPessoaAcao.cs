using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aula04
{
    public interface IPessoaAcao<T>
    {
        public T ExecutarAcao(PessoaFisica obj);
        public T ExecutarAcao(PessoaJuridica obj);
    }
}
