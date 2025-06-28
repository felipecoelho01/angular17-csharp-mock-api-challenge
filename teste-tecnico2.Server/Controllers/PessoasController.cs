using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using teste_tecnico2.Server.Models;

namespace teste_tecnico2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetPessoas()
        {
            var pessoas = GerarListaPessoas();
            return Ok(pessoas);
        }

        private List<Pessoas> GerarListaPessoas()
        {
            var pessoas = new List<Pessoas>();
            var random = new Random();
            var generos = new[] { "Masculino", "Feminino" };

            for (int i = 0; i < 30; i++)
            {
                pessoas.Add(new Pessoas
                {
                    Cpf = GeradorCpf(),
                    Nome = $"Pessoa {i}",
                    Genero = generos[random.Next(generos.Length)],
                    Endereco = $"Rua {i}, Nº {random.Next(1000)}",
                    Idade = random.Next(18, 65),
                    Municipio = $"Cidade {i}",
                    Estado = EstadoAleatorio()
                });
            }

            return pessoas;
        }

        private string GeradorCpf()
        {
            var random = new Random();
            return $"{random.Next(100, 999)}.{random.Next(100, 999)}.{random.Next(100, 999)}-{random.Next(10, 99)}";
        }

        private string EstadoAleatorio() 
        {
            var random = new Random();

            var estados = new[] 
            {
                "AC",
                "AL",
                "AP",
                "AM",
                "CE",
                "DF",
                "ES",
                "GO",
                "MA",
                "MT",
                "MS",
                "MG",
                "PA",
                "PB",
                "PR",
                "PE",
                "PI",
                "RJ",
                "RN",
                "RS",
                "RO",
                "RR",
                "SC",
                "SP",
                "SE",
                "TO",
            };

            return estados[random.Next(estados.Length)];
        }
    }
}

