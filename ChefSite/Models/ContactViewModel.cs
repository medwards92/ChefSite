using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ChefSite.Models
{
    public class ContactViewModel
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public DateTime EventDate { get; set; }
        public int EventType { get; set; }
        public string BrideFirstName { get; set; }
        public string BrideLastName { get; set; }
        public string GroomFirstName { get; set; }
        public string GroomLastName { get; set; }
        public string CompanyName { get; set; }
        public string Description { get; set; }
    }
}