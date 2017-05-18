using Serenity.Navigation;
using Northwind = FruitCorrect.Northwind.Pages;

//[assembly: NavigationMenu(7000, "Northwind", icon: "icon-anchor")]
[assembly: NavigationLink(7000, "Employee", typeof(Northwind.EmployeeController), icon: "fa-users")]

[assembly: NavigationLink(7100, "Customers", typeof(Northwind.CustomerController), icon: "icon-wallet")]
[assembly: NavigationLink(7200, "Orders", typeof(Northwind.OrderController), icon: "icon-basket-loaded")]
[assembly: NavigationLink(7300, "Products", typeof(Northwind.ProductController), icon: "icon-present")]
[assembly: NavigationLink(7400, "Suppliers", typeof(Northwind.SupplierController), icon: "icon-magic-wand")]
[assembly: NavigationLink(7500, "Shippers", typeof(Northwind.ShipperController), icon: "icon-plane")]
[assembly: NavigationLink(7600, "Categories", typeof(Northwind.CategoryController), icon: "icon-folder-alt")]
[assembly: NavigationLink(7700, "Regions", typeof(Northwind.RegionController), icon: "icon-map")]
[assembly: NavigationLink(7800, "Territories", typeof(Northwind.TerritoryController), icon: "icon-puzzle")]
[assembly: NavigationLink(7900, "Reports", typeof(Northwind.ReportsController), icon: "icon-docs")]
