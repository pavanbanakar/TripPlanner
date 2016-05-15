using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.WebApi.Models
{
    public class ExpenseManagerContextSeedData
    {
        private ExpenseManagerContext _context;

        public ExpenseManagerContextSeedData(ExpenseManagerContext context)
        {
            _context = context;
        }

        public async Task EnsureSeedDataAsync()
        {
            if (!_context.ExpenseGroupStatus.Any())
            {
                var expenseGroupStatuses = new List<ExpenseGroupStatus>()
                {
                    new ExpenseGroupStatus()
                    {
                        Description = "Submitted"
                    },
                    new ExpenseGroupStatus()
                    {
                        Description = "Approved"
                    },
                    new ExpenseGroupStatus()
                    {
                        Description = "Paid"
                    },
                    new ExpenseGroupStatus()
                    {
                        Description = "Closed"
                    },
                };

                _context.ExpenseGroupStatus.AddRange(expenseGroupStatuses);


                var expenseGroup = new ExpenseGroup()
                {
                    Description = "Business Trip",
                    ExpenseGroupStatus = expenseGroupStatuses.First(),
                    Title = "Business Trip",
                    UserId = "Provolone Sandwich",

                };



                _context.ExpenseGroups.Add(expenseGroup);

                var expenses = new List<Expense>
                    {
                        new Expense
                        {
                            Amount = (decimal)100.00,
                            Date = DateTime.UtcNow,
                            Description = " Lunch and Dinner",
                            ExpenseGroup = expenseGroup

                        }
                    };

                _context.Expenses.AddRange(expenses);
            }
            await _context.SaveChangesAsync();
        }
    }
}