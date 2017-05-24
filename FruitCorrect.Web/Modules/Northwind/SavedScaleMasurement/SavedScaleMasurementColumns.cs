using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;

namespace FruitCorrect.Northwind.Columns
{
    [ColumnsScript("Northwind.SavedScaleMasurement")]
    [BasedOnRow(typeof(Entities.SavedScaleMasurementRow))]
    public class SavedScaleMasurementColumns
    {
        public String ScaleName { get; set; }

        public String OrderCustomerId { get; set; }
        public Int32 OrderId { get; set; }


        public String ProductProductName { get; set; }

        public DateTime OrderOrderDate { get; set; }

        public Decimal PhisicalQuantity { get; set; }
    }
}
