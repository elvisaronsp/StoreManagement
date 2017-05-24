
namespace FruitCorrect.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.Scales")]
    [BasedOnRow(typeof(Entities.ScalesRow))]
    public class ScalesForm
    {
        public Int32? ScaleID { get; set; }
        public String Name { get; set; }
    }
}