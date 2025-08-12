using Microsoft.EntityFrameworkCore;
using UserService.Api.DbContexts;

namespace UserService.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("UserDb")));

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "User Service API",
                    Version = "v1",
                    Description = "API for managing users in the User Service application."
                });
            });

            var app = builder.Build();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "User Service API V1");
                c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
            });

            //app.MapGet("/", () => "Hello World!");

            app.MapControllers();

            app.Run();
        }
    }
}
