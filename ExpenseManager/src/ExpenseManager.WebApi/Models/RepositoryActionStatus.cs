using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.WebApi.Models
{
    public enum RepositoryActionStatus
    {
        Ok,
        Created,
        Updated,
        NotFound,
        Deleted,
        NothingModified,
        Error
    }
}