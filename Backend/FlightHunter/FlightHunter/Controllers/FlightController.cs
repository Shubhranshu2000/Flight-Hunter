using FlightHunter.Models;
using Microsoft.AspNetCore.Mvc;

namespace FlightHunter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlightController : ControllerBase
    {

        Flight[] flights = new Flight[]
        {
            new Flight(
                Guid.NewGuid(),
                "Airline A",
                "$100",
                new TimePlace("New York", DateTime.Now.AddHours(1)),
                new TimePlace("Los Angeles", DateTime.Now.AddHours(5)),
                100
            ),
            new Flight(
                Guid.NewGuid(),
                "Airline B",
                "$200",
                new TimePlace("Chicago", DateTime.Now.AddHours(2)),
                new TimePlace("Miami", DateTime.Now.AddHours(6)),
                50
            ),
            new Flight(
                Guid.NewGuid(),
                "Airline C",
                "$150",
                new TimePlace("San Francisco", DateTime.Now.AddHours(3)),
                new TimePlace("Seattle", DateTime.Now.AddHours(7)),
                75
            ),
            new Flight(
                Guid.NewGuid(),
                "Airline D",
                "$250",
                new TimePlace("Boston", DateTime.Now.AddHours(4)),
                new TimePlace("Washington", DateTime.Now.AddHours(8)),
                30
            ),
            new Flight(
                Guid.NewGuid(),
                "Airline E",
                "$300",
                new TimePlace("Dallas", DateTime.Now.AddHours(5)),
                new TimePlace("Houston", DateTime.Now.AddHours(9)),
                60
            )
        };

        [HttpGet]
        public IActionResult GetAllFlights()
        {
            return Ok(this.flights);
        }
    }
}
