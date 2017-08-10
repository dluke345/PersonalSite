using System.Web;
using System.Web.Optimization;

namespace anotherTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Content/Scripts/jquery-{version}.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Content/Scripts/jquery.validate.min.js",
                        "~/Content/Scripts/jquery.validate.unobtrusive.min.js",
                        "~/Content/Scripts/jquery.validate-vsdoc.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Content/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Content/Scripts/bootstrap.min.js",
                      "~/Content/Scripts/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                      "~/Content/bootstrap.min.css"));
        }
    }
}
