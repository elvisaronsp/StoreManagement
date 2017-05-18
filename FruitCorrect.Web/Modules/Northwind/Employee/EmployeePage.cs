namespace FruitCorrect.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeeRow))]
    public class EmployeeController : Controller
    {
        [Route("Northwind/Employee")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Employee.EmployeeIndex);
        }
    }
}
