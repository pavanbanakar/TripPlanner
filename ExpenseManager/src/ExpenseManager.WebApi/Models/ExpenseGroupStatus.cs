using System.Collections;
using System.Collections.Generic;

namespace ExpenseManager.WebApi.Models
{
    public class ExpenseGroupStatus
    {
        public ExpenseGroupStatus()
        {
           
        }
        public int Id { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ExpenseGroup> ExpenseGroups { get; set; }
    }
}