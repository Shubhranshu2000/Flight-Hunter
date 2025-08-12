using Microsoft.AspNetCore.Mvc;
using UserService.Api.DbContexts;
using UserService.Api.Models;

namespace UserService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        public UserController(UserDbContext userDbContext)
        {
            this._userDbContext = userDbContext;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            List<User> users = this._userDbContext.Users.ToList();

            return Ok(users);
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            if (user == null)
            {
                return BadRequest("User cannot be null");
            }

            this._userDbContext.Users.Add(user);
            this._userDbContext.SaveChanges();
            return Created();
        }
    }
}
