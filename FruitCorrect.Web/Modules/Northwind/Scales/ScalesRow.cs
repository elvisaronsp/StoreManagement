
namespace FruitCorrect.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), TableName("[dbo].[Scales]"), DisplayName("Scales"), InstanceName("Scales"), TwoLevelCached]
    [ReadPermission("Northwind:Scales")]
    [ModifyPermission("Northwind:Scales")]
    public sealed class ScalesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scale Id"), Column("ScaleID"), Identity]
        public Int32? ScaleId
        {
            get { return Fields.ScaleId[this]; }
            set { Fields.ScaleId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Url"), Size(50), QuickSearch]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("PortName"), Size(50), QuickSearch]
        public String PortName
        {
            get { return Fields.PortName[this]; }
            set { Fields.PortName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ScaleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScalesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScaleId;
            public StringField Name;
            public StringField Url;
            public StringField PortName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Northwind.Scales";
            }
        }
    }
}
