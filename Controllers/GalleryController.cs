using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Totorise.Controllers
{
    [Route("api/[controller]")]
    public class GalleryController : Controller
    {
        [HttpGet("{photo}")]
        public IActionResult GetPhoto()
        {
            var datasource = new List<Photo>
            {
                new Photo {Url = "http://lorempixel.com/output/city-q-c-1920-1920-9.jpg"},
                new Photo {Url = "http://lorempixel.com/output/sports-q-c-1920-1920-2.jpg"},
                new Photo {Url = "http://lorempixel.com/output/animals-q-c-1920-1920-8.jpg"},
                new Photo {Url = "http://lorempixel.com/output/city-q-c-1920-1920-5.jpg"},
                new Photo {Url = "http://lorempixel.com/output/nature-q-c-1920-1920-7.jpg"},
                new Photo {Url = "http://lorempixel.com/output/abstract-q-c-1920-1920-8.jpg"},
                new Photo {Url = "http://lorempixel.com/output/nature-q-c-1920-1920-1.jpg"},
                new Photo {Url = "http://lorempixel.com/output/people-q-c-1920-1920-7.jpg"},
                new Photo {Url = "http://lorempixel.com/output/animals-q-c-1920-1920-1.jpg"},
                new Photo {Url = "http://lorempixel.com/output/technics-q-c-1920-1920-8.jpg"},
                new Photo {Url = "http://lorempixel.com/output/abstract-q-c-1920-1920-1.jpg"},
                new Photo {Url = "http://lorempixel.com/output/food-q-c-1920-1920-9.jpg"}
            };

            var json = JsonConvert.SerializeObject(datasource, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });

            return Ok(json);
        }
    }

    public class Photo
    {
        public string Url { get; set; }
    }
}