using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FruitCorrect.Northwind.Entities;
using Serenity.Data;
using Serenity.Navigation;

[assembly: NavigationMenu(7000, "Кантари", icon: "fa-balance-scale")]

//[assembly: NavigationLink(7000, "Scales", typeof(Northwind.EmployeeController), icon: "fa-balance-scale")]

public class DynamicNavigation : INavigationItemSource
{
    public List<NavigationItemAttribute> GetItems()
    {
        var items = new List<NavigationItemAttribute>
            {
                new NavigationMenuAttribute(7970, "Кантари/Scale", "fa-balance-scale")
            };

        // Add product categories as dynamic navigation items for demo purpose
        using (var connection = SqlConnections.NewByKey("Northwind"))
        {
            var scales = connection.List<ScalesRow>();
            foreach (var scale in scales)
                items.Add(new NavigationLinkAttribute(7970,
                    
                    path: "Кантари/" + scale.Name.Replace("/", "//"),
                    url: "~/ScaleMeasurement?id=" + scale.ScaleId,
                    permission: "Northwind:Scales",
                    icon: "icon-folder-alt"));
        }

        return items;
    }
}

