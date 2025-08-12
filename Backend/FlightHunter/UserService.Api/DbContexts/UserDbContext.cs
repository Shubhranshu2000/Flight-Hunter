using Microsoft.EntityFrameworkCore;
using UserService.Api.Models;

namespace UserService.Api.DbContexts
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options){}

        public DbSet<User> Users { get; set; }
    }
}
