
namespace FruitCorrect.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.Scales")]
    [BasedOnRow(typeof(Entities.ScalesRow))]
    public class ScalesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ScaleId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}