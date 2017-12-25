using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ChefSite.Models
{
    public class ContactViewModel
    {
        [Display(Name = "Name")]
        public string FullName { get; set; }

        [Display(Name = "Phone Number")]
        public string PhoneNumber { get; set; }

        [Display(Name = "Email")]
        public string EmailAddress { get; set; }

        [Display(Name = "Event Date")]
        public DateTime EventDate { get; set; }

        [Display(Name = "Type of Event")]
        public int EventType { get; set; }

        [Display(Name = "Comments")]
        public string Comments { get; set; }
    }
}