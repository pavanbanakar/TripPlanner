using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.WebApi.Models
{

    public class RepsitoryAction<T> where T : class
    {
        public T _entity { get; set; }

        public RepositoryActionStatus _repositoryActionStatus { get; set; }

        public Exception Exception { get; set; }


        public RepsitoryAction(T entity, RepositoryActionStatus actionStatus)
        {
            _entity = entity;
            _repositoryActionStatus = actionStatus;

        }

        public RepsitoryAction(T entity, RepositoryActionStatus actionStatus, Exception exception) : this(entity, actionStatus)
        {
            Exception = exception;
        }
    }
}
