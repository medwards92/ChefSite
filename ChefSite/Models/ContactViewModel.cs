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
        [DataType(dataType: DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Entered phone format is not valid.")]
        public string PhoneNumber { get; set; }

        [Display(Name = "Email")]
        public string EmailAddress { get; set; }

        [Display(Name = "Event Date")]
        [DataType(dataType: DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime EventDate { get; set; }

        [Display(Name = "Type of Event")]
        public string EventType { get; set; }

        [Display(Name = "Comments")]
        public string Comments { get; set; }
    }
}