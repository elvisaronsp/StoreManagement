
using FruitCorrect.Northwind.Entities;

namespace FruitCorrect.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeForm
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }

        public DateTime HireDate { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
    }
}
