
namespace FruitCorrect.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), TableName("[dbo].[SavedScaleMasurement]"), DisplayName("Saved Scale Masurement"), InstanceName("Saved Scale Masurement"), TwoLevelCached]
    [ReadPermission("Northwind:SavedScaleMasurement")]
    [ModifyPermission("Northwind:SavedScaleMasurement")]
    public sealed class SavedScaleMasurementRow : Row, IIdRow
    {
        [DisplayName("Scale Masurement Id"), Column("ScaleMasurementID"), Identity]
        public Int32? ScaleMasurementId
        {
            get { return Fields.ScaleMasurementId[this]; }
            set { Fields.ScaleMasurementId[this] = value; }
        }

        [DisplayName("Scale"), Column("ScaleID"), NotNull, ForeignKey("[dbo].[Scales]", "ScaleID"), LeftJoin("jScale"), TextualField("ScaleName")]
        public Int32? ScaleId
        {
            get { return Fields.ScaleId[this]; }
            set { Fields.ScaleId[this] = value; }
        }

        [DisplayName("Order"), Column("OrderID"), NotNull, ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrder"), TextualField("OrderCustomerId")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), NotNull, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Inserted Date"), NotNull]
        public DateTime? InsertedDate
        {
            get { return Fields.InsertedDate[this]; }
            set { Fields.InsertedDate[this] = value; }
        }

        [DisplayName("Phisical Quantity"), Size(5), Scale(2), NotNull]
        public Decimal? PhisicalQuantity
        {
            get { return Fields.PhisicalQuantity[this]; }
            set { Fields.PhisicalQuantity[this] = value; }
        }

        [DisplayName("Scale Name"), Expression("jScale.[Name]")]
        public String ScaleName
        {
            get { return Fields.ScaleName[this]; }
            set { Fields.ScaleName[this] = value; }
        }

        [DisplayName("Order Customer Id"), Expression("jOrder.[CustomerID]")]
        public String OrderCustomerId
        {
            get { return Fields.OrderCustomerId[this]; }
            set { Fields.OrderCustomerId[this] = value; }
        }

        [DisplayName("Order Employee Id"), Expression("jOrder.[EmployeeID]")]
        public Int32? OrderEmployeeId
        {
            get { return Fields.OrderEmployeeId[this]; }
            set { Fields.OrderEmployeeId[this] = value; }
        }

        [DisplayName("Order Order Date"), Expression("jOrder.[OrderDate]")]
        public DateTime? OrderOrderDate
        {
            get { return Fields.OrderOrderDate[this]; }
            set { Fields.OrderOrderDate[this] = value; }
        }

        [DisplayName("Order Required Date"), Expression("jOrder.[RequiredDate]")]
        public DateTime? OrderRequiredDate
        {
            get { return Fields.OrderRequiredDate[this]; }
            set { Fields.OrderRequiredDate[this] = value; }
        }

        [DisplayName("Order Shipped Date"), Expression("jOrder.[ShippedDate]")]
        public DateTime? OrderShippedDate
        {
            get { return Fields.OrderShippedDate[this]; }
            set { Fields.OrderShippedDate[this] = value; }
        }

        [DisplayName("Order Ship Via"), Expression("jOrder.[ShipVia]")]
        public Int32? OrderShipVia
        {
            get { return Fields.OrderShipVia[this]; }
            set { Fields.OrderShipVia[this] = value; }
        }

        [DisplayName("Order Freight"), Expression("jOrder.[Freight]")]
        public Decimal? OrderFreight
        {
            get { return Fields.OrderFreight[this]; }
            set { Fields.OrderFreight[this] = value; }
        }

        [DisplayName("Order Ship Name"), Expression("jOrder.[ShipName]")]
        public String OrderShipName
        {
            get { return Fields.OrderShipName[this]; }
            set { Fields.OrderShipName[this] = value; }
        }

        [DisplayName("Order Ship Address"), Expression("jOrder.[ShipAddress]")]
        public String OrderShipAddress
        {
            get { return Fields.OrderShipAddress[this]; }
            set { Fields.OrderShipAddress[this] = value; }
        }

        [DisplayName("Order Ship City"), Expression("jOrder.[ShipCity]")]
        public String OrderShipCity
        {
            get { return Fields.OrderShipCity[this]; }
            set { Fields.OrderShipCity[this] = value; }
        }

        [DisplayName("Order Ship Region"), Expression("jOrder.[ShipRegion]")]
        public String OrderShipRegion
        {
            get { return Fields.OrderShipRegion[this]; }
            set { Fields.OrderShipRegion[this] = value; }
        }

        [DisplayName("Order Ship Postal Code"), Expression("jOrder.[ShipPostalCode]")]
        public String OrderShipPostalCode
        {
            get { return Fields.OrderShipPostalCode[this]; }
            set { Fields.OrderShipPostalCode[this] = value; }
        }

        [DisplayName("Order Ship Country"), Expression("jOrder.[ShipCountry]")]
        public String OrderShipCountry
        {
            get { return Fields.OrderShipCountry[this]; }
            set { Fields.OrderShipCountry[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryID]")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Int16? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Expiration Date"), Expression("jProduct.[ExpirationDate]")]
        public DateTime? ProductExpirationDate
        {
            get { return Fields.ProductExpirationDate[this]; }
            set { Fields.ProductExpirationDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ScaleMasurementId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SavedScaleMasurementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScaleMasurementId;
            public Int32Field ScaleId;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public Int32Field UserId;
            public DateTimeField InsertedDate;
            public DecimalField PhisicalQuantity;

            public StringField ScaleName;

            public StringField OrderCustomerId;
            public Int32Field OrderEmployeeId;
            public DateTimeField OrderOrderDate;
            public DateTimeField OrderRequiredDate;
            public DateTimeField OrderShippedDate;
            public Int32Field OrderShipVia;
            public DecimalField OrderFreight;
            public StringField OrderShipName;
            public StringField OrderShipAddress;
            public StringField OrderShipCity;
            public StringField OrderShipRegion;
            public StringField OrderShipPostalCode;
            public StringField OrderShipCountry;

            public StringField ProductProductName;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public DateTimeField ProductExpirationDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Northwind.SavedScaleMasurement";
            }
        }
    }
}
