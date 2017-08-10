using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using anotherTest.Models;
using System.Threading;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace anotherTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Projects()
        {
            ViewBag.Message = "Development Projects";

            return View("Index");
        }

        public ActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(ContactModels data)
        {
                if (ModelState.IsValid)
                {

                    //prepare email
                    var body = "<p>From: {0} ({1})</p><p>Email: {2}</p><p>Message:</p><p>{3}</p>";
                    var message = new MailMessage();
                    message.To.Add(new MailAddress("dluke345@lukeskydeveloper.com"));
                    message.From = new MailAddress("dluke345@lukeskydeveloper.com");
                    message.Subject = "Personal Website - Contact Me";
                    message.Body = string.Format(body, data.FirstName, data.LastName, data.Email, data.Comment);
                    message.IsBodyHtml = true;


                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "dluke345@lukeskydeveloper.com",
                        Password = "Maggie678!"
                    };
                    smtp.UseDefaultCredentials = true;
                    //smtp.Credentials = credential;
                    await smtp.SendMailAsync(message);

                    return View("Success", data);
                }
                    
                    
                }
           
            return View(data);
        }

        public ActionResult Resume()
        {
            ViewBag.Message = "Resume";

            return View("Index");
        }

        public ActionResult WorkProjects()
        {
            ViewBag.Message = "Development Work Projects";

            return View("Index");
        }

        public ActionResult Success()
        {
            ViewBag.Message = "Message sent!";

            return View();
        }

        public ActionResult Error()
        {
            ViewBag.Message = "Error Occured";

            return View();
        }

    }
}