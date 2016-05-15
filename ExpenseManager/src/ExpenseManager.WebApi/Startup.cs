using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ExpenseManager.WebApi.Models;
using Newtonsoft.Json.Serialization;
using AutoMapper;
using ExpenseManager.WebApi.ViewModels;

namespace ExpenseManager.WebApi
{
    public class Startup
    {

        public static IConfigurationRoot Configuration { get; set; }

        public static IMapper MapperConfiguration { get; set; } 

        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

      

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging();
            // Add framework services.
            services.AddMvc().AddJsonOptions(act =>
            {
                act.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            services.AddEntityFramework().AddSqlServer().AddDbContext<ExpenseManagerContext>();
            services.AddTransient<ExpenseManagerContextSeedData>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, ExpenseManagerContextSeedData seeder)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug(LogLevel.Information);

            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc(config =>
            {
               config.MapRoute(
                   name:"Default",
                   template:"/api/{controller}/{id}",
                   defaults: new {id  = RouteParameter.}

                   )
            })


            MapperConfiguration = new MapperConfiguration(con =>
            {
                con.CreateMap<Expense, ExpenseViewModel>().ReverseMap();
                con.CreateMap<ExpenseGroup, ExpenseGroupViewModel>().ReverseMap();
                con.CreateMap<ExpenseGroupStatus, ExpenseGroupStatusViewModel>().ReverseMap();
            }).CreateMapper();

            await seeder.EnsureSeedDataAsync();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
