

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue,
    "Administration/Scales",
    typeof(FruitCorrect.Northwind.Pages.ScalesController), icon: "fa-balance-scale")]

namespace FruitCorrect.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ScalesRow))]
    public class ScalesController : Controller
    {
        [Route("Northwind/Scales")]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Scales/ScalesIndex.cshtml");
        }

    
}
}