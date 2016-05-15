using System.Collections;
using System.Collections.Generic;

namespace ExpenseManager.WebApi.Models
{
    public class ExpenseGroup
    {

        public ExpenseGroup()
        {
        }

        public int Id { get; set; }

        public string UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int ExpenseGroupStatusId { get; set; }

        public virtual ICollection<Expense> Expenses { get; set; }

        public virtual ExpenseGroupStatus ExpenseGroupStatus { get; set; }

    }
}