
namespace FruitCorrect.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeID { get; set; }
        public String FullName { get; set; }
        public Int32 Gender { get; set; }
        public String Address { get; set; }
        public String HomePhone { get; set; }


    }
}