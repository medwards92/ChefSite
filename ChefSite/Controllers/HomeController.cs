using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using ChefSite.Models;

namespace ChefSite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Gallery()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public JsonResult SendContactEmail(ContactViewModel model)
        {
            try
            {
                MailMessage email = new MailMessage();
                email.From = new MailAddress(model.EmailAddress);

                email.To.Add("chef@chefraoul.com");   //chef@chefraoul.com
                email.Subject = string.Format("Contact Request - {0}", model.FullName);
                email.Body = string.Format("Event: {0}\r\nDate: {1}\r\nPhone Number: {2}\r\nComments: {3}",
                    model.EventType,
                    model.EventDate.Date.ToString(format: "{0:###-###-####}"),
                    model.PhoneNumber,
                    model.Comments);
                SmtpClient smtp = new SmtpClient();

                smtp.Host = "gator4125.hostgator.com";

                smtp.Port = 587; //2096;

                smtp.Credentials = new System.Net.NetworkCredential
                ("info@atastefulevent.com", "aTastefulInfo2018");

                smtp.EnableSsl = true;

                smtp.Send(email);

                ModelState.Clear();

                return Json("success: true");
            }
            catch (Exception ex)
            {
                ModelState.Clear();
                
                return Json("success: false");
            }
        }
    }
}