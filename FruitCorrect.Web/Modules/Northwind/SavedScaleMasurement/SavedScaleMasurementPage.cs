
using System;
using System.Net;
using System.Threading.Tasks;
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
        

        [Route("ScaleMeasurement")]
        public async Task<IActionResult> Scale(int id)
        {
            var connection = SqlConnections.NewFor<Entities.ScalesRow>();
            var model = connection.TryById<ScalesRow>(id);

            if (!await TestPing(model.Url.TrimEnd('/') + "/signalr/hubs"))
            {
                if (ViewBag.NoConnection == null)
                    ViewBag.NoConnection = "Connection with scale can not be established!";
            }
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

        private async Task<bool> TestPing(string url)
        {
            try
            {
                HttpWebRequest request = HttpWebRequest.Create(url) as HttpWebRequest;
                request.ContinueTimeout = 5000; //set the timeout to 5 seconds to keep the user from waiting too long for the page to load
                request.Method = "GET"; //Get only the header information -- no need to download any content

                HttpWebResponse response = (HttpWebResponse)(await request.GetResponseAsync());

                int statusCode = (int)response.StatusCode;
                if (statusCode >= 100 && statusCode < 400) //Good requests
                {
                    return true;
                }
                else if (statusCode >= 500 && statusCode <= 510) //Server Errors
                {
                    ViewBag.NoConnection = String.Format("The remote server has thrown an internal error. Url is not valid: {0}", url);
                    return false;
                }
            }
            catch (WebException ex)
            {
                if (ex.Status == WebExceptionStatus.ProtocolError) //400 errors
                {
                    return false;
                }
                else
                {
                    ViewBag.NoConnection = String.Format("Unhandled status [{0}] returned for url: {1}", ex.Status, url);
                }
            }
            catch (Exception ex)
            {
                ViewBag.NoConnection = String.Format("Could not test url {0}.", url);
            }
            return false;
        }
    }
}