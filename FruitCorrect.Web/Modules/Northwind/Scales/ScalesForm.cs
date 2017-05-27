
namespace FruitCorrect.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.Scales")]
    [BasedOnRow(typeof(Entities.ScalesRow))]
    public class ScalesForm
    {
        public String Name { get; set; }

        public String Url { get; set; }
        public String PortName { get; set; }
    }
}