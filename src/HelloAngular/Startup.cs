using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HelloAngular
{
    public class Startup
    {
        public Startup()
        {
            //var config = new ConfigurationBuilder();
            //config.AddJsonFile("appsettings.json");
            //config.AddXmlFile("web.config");
            //MyConfiguration = config.Build();
        }

        //IConfiguration MyConfiguration;
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddSingleton(ConfigurationProvider => MyConfiguration);
            services.AddMvcCore()
                .AddJsonFormatters();
            //services.AddRouting();
        }
            //loggerFactory.AddConsole();

            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseDefaultFiles()
                .UseStaticFiles()
                .UseMvc();
        }  
        
        //routes =>
                //{
                //    routes.MapRoute(
                //        name: "default",
                //        template: "api/{controller=HolaMundo}/{action=Get}");
                //})
    }
}
