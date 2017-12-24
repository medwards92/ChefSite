using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ChefSite.Startup))]
namespace ChefSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
