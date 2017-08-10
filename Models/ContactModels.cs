using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;//validation-display attributes

namespace anotherTest.Models
{
    public class ContactModels
    {
        public bool ShowItemCaptionColon { get; set; }

        [Required(ErrorMessage ="First Name is required")]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [RegularExpression(@"^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$", ErrorMessage = "Invalid Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Comment is required")]
        [UIHint("MultilineText")]
        public string Comment { get; set; }
    }
}