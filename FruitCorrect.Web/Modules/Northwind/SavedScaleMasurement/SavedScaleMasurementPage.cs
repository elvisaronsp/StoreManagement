
using System;
using FruitCorrect.Migrations.NorthwindDB;
using FruitCorrect.Northwind.Entities;
using Microsoft.AspNetCore.Authorization;

namespace FruitCorrect.Northwind.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    //[PageAuthorize(typeof(Entities.SavedScaleMasurementRow))]
    public class SavedScaleMasurementController : Controller
    {
        

        [Route("Northwind/Scale")]
        public ActionResult Scale(int id)
        {
            ViewBag.Scale = $"{id}";
            return View("~/Modules/Northwind/SavedScaleMasurement/SavedScaleMasurementIndex.cshtml");
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/scale")]
        public JsonResult PostNewMeasurement(MeasurementModel model)
        {

            var connection = SqlConnections.NewFor<Entities.SavedScaleMasurementRow>();
            var savedMeasurement = new SavedScaleMasurementRow
            {
                OrderId = model.OrderID,
                ProductId = model.ProductID,
                UserId = model.UserId,
                ScaleId = model.ScaleID,
                PhisicalQuantity = model.Weight,
                InsertedDate = DateTime.Now
            };
            connection.Insert(savedMeasurement);

            var fld =  OrderDetailRow.Fields;
            var details = connection.First<OrderDetailRow>(
                              fld.OrderID == model.OrderID.ToString() &
              fld.ProductID == model.ProductID.ToString());
            details.PhisicalQuantity += savedMeasurement.PhisicalQuantity;

            connection.UpdateById(details, ExpectedRows.One);

            return Json(model);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/settings")]
        public JsonResult GetPortSettings()
        {
            var model = new ScaleModel();
            return Json(model);
        }

        public class MeasurementModel
        {
            public int OrderID { get; set; }

            public int ProductID { get; set; }

            public int ScaleID { get; set; }

            public decimal Weight { get; set; }

            public int UserId { get; set; }

        }

        public class ScaleModel
        {
            public string PortName { get; set; }

            public int BaudRate { get; set; }

            public int Parity { get; set; }

            public int DataBits { get; set; }

            public int StopBits { get; set; }


        }
    }
}