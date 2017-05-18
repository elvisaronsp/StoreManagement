using Serenity.Services;

namespace FruitCorrect.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}