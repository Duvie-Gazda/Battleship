using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Exam.Data
{
    public class Map
    {
        [Key]
        public int Id {get; set;}
        public IdentityUser Owner {get; set;}
        public ICollection<Cell> Cells {get;set;}
    }
}