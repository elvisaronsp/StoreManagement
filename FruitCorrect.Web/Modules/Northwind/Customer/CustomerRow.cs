
namespace FruitCorrect.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), TableName("Customers"), DisplayName("Customers"), InstanceName("Customer"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.Modify)]
    [DeletePermission(PermissionKeys.Customer.Delete)]
    [LeftJoin("cd", "CustomerDetails", "cd.[ID] = t0.[ID]", RowType = typeof(CustomerDetailsRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(CustomerDetailsRow), CascadeDelete = true)]
    [LookupScript(typeof(Scripts.CustomerLookup))]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("Customer Id"), Size(5), PrimaryKey, NotNull, QuickSearch, Updatable(false), LookupInclude]
        public String CustomerID
        {
            get { return Fields.CustomerID[this]; }
            set { Fields.CustomerID[this] = value; }
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, LookupInclude]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }
        
        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(15), LookupFiltering("Northwind.CustomerCountry")]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Fax"), Size(24)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }
        
        [Origin("cd"), EmailEditor]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [Origin("cd")]
        public String BulstatEIK
        {
            get { return Fields.BulstatEIK[this]; }
            set { Fields.BulstatEIK[this] = value; }
        }

        [Origin("cd")]
        public String DdsNumber
        {
            get { return Fields.DdsNumber[this]; }
            set { Fields.DdsNumber[this] = value; }
        }
        [Origin("cd")]
        public String BankAccount
        {
            get { return Fields.BankAccount[this]; }
            set { Fields.BankAccount[this] = value; }
        }
        [Origin("cd"), DefaultValue(false)]
        public Boolean? SendBulletin
        {
            get { return Fields.SendBulletin[this]; }
            set { Fields.SendBulletin[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        
        [LookupEditor(typeof(EmployeeRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CustomerRepresentativesRow), "CustomerId", "EmployeeId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> Representatives
        {
            get { return Fields.Representatives[this]; }
            set { Fields.Representatives[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField CustomerID;
            public StringField CompanyName;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;
            public StringField Fax;
            public RowListField<NoteRow> NoteList;
            public ListField<Int32> Representatives;
            public StringField Email;
            public BooleanField SendBulletin;
            public StringField BulstatEIK;
            public StringField DdsNumber;
            public StringField BankAccount;

            public RowFields()
            {
                LocalTextPrefix = "Northwind.Customer";
            }
        }
    }
}