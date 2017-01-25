using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using System.Web.Routing;

namespace RazrTestAssignment
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
           

	     GlobalConfiguration.Configuration
	          .Formatters
        	  .JsonFormatter
	          .SerializerSettings
        	  .ContractResolver = new CamelCasePropertyNamesContractResolver();
         }
    }
}