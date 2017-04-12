using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HelloAngular.WebAPI
{
    [Route("api/[controller]")]
    public class HolaMundoController : Controller
    {
        //IConfiguration config;
        //public HolaMundoController(IConfiguration c)
        //{
        //    this.config = c;
        //}


        [HttpGet]
        public HolaMundoResponse Get()
        {
            var r = new HolaMundoResponse() { Mensaje = "Mi Saludo Especial!" };
            return r;
        }
    }
    
    public class HolaMundoResponse
    {
        public string Mensaje{get;set;}
    }
}
