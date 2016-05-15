using System.Collections.Generic;

namespace ExpenseManager.WebApi.ViewModels
{
    public class ExpenseGroupViewModel
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int ExpenseGroupStatusId { get; set; }

        public virtual ICollection<ExpenseViewModel> Expenses { get; set; }
    }
}