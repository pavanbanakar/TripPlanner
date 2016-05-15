using Microsoft.Data.Entity;

namespace ExpenseManager.WebApi.Models
{
    public class ExpenseManagerContext : DbContext
    {
        public ExpenseManagerContext()
        {
            Database.EnsureCreated();
        }
        
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<ExpenseGroup> ExpenseGroups { get; set; }
        
        public DbSet<ExpenseGroupStatus> ExpenseGroupStatus { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = Startup.Configuration["Data:WorldContextConnection"].ToString();
            optionsBuilder.UseSqlServer(connectionString);
            base.OnConfiguring(optionsBuilder);
        }
    }
}