

namespace FruitCorrect.Northwind.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), DisplayName("CustomerDetails"), InstanceName("CustomerDetails"), TwoLevelCached]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    public sealed class CustomerDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

      

        [DisplayName("Email"), Size(100), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Bulstat/EIK"), Size(100), QuickSearch]
        public String BulstatEIK
        {
            get { return Fields.BulstatEIK[this]; }
            set { Fields.BulstatEIK[this] = value; }
        }

        [DisplayName("Dds Number"), Size(100), QuickSearch]
        public String DdsNumber
        {
            get { return Fields.DdsNumber[this]; }
            set { Fields.DdsNumber[this] = value; }
        }
        [DisplayName("Bank Account"), Size(100), QuickSearch]
        public String BankAccount
        {
            get { return Fields.BankAccount[this]; }
            set { Fields.BankAccount[this] = value; }
        }
        [DisplayName("Send Bulletin"), NotNull]
        public Boolean? SendBulletin
        {
            get { return Fields.SendBulletin[this]; }
            set { Fields.SendBulletin[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Email; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Email;
            public StringField BulstatEIK;
            public StringField DdsNumber;
            public StringField BankAccount;
            public BooleanField SendBulletin;

            public RowFields()
                : base("CustomerDetails")
            {
                LocalTextPrefix = "Northwind.CustomerDetails";
            }
        }
    }
}