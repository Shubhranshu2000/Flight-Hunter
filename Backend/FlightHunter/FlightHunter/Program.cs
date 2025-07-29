namespace FlightHunter
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyCors", builder =>
                {
                    builder.WithOrigins("")
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            app.UseSwagger();

            app.UseSwaggerUI();

            app.UseRouting();

            app.MapControllers();

            app.UseCors("MyCors");

            app.MapGet("/", context =>
            {
                context.Response.Redirect("/swagger/index.html");
                return Task.CompletedTask;
            });

            app.Run();
        }
    }
}
