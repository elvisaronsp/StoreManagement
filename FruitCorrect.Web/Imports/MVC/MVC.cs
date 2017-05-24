using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Meeting
        {
            public static class Meeting_
            {
                public const string MeetingIndex = "~/Modules/Meeting/Meeting/MeetingIndex.cshtml";
            }

            public static class MeetingAgendaRelevant
            {
                public const string MeetingAgendaRelevantIndex = "~/Modules/Meeting/MeetingAgendaRelevant/MeetingAgendaRelevantIndex.cshtml";
            }

            public static class MeetingAgendaType
            {
                public const string MeetingAgendaTypeIndex = "~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml";
            }

            public static class MeetingDecisionRelevant
            {
                public const string MeetingDecisionRelevantIndex = "~/Modules/Meeting/MeetingDecisionRelevant/MeetingDecisionRelevantIndex.cshtml";
            }

            public static class MeetingLocation
            {
                public const string MeetingLocationIndex = "~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml";
            }

            public static class MeetingType
            {
                public const string MeetingTypeIndex = "~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Northwind
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Northwind/Employee/EmployeeIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderDetailReport = "~/Modules/Northwind/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class SavedScaleMasurement
            {
                public const string SavedScaleMasurementIndex = "~/Modules/Northwind/SavedScaleMasurement/SavedScaleMasurementIndex.cshtml";
            }

            public static class Scales
            {
                public const string ScalesIndex = "~/Modules/Northwind/Scales/ScalesIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Northwind/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }

        }

        public static class Organization
        {
            public static class BusinessUnit
            {
                public const string BusinessUnitIndex = "~/Modules/Organization/BusinessUnit/BusinessUnitIndex.cshtml";
            }

            public static class Contact
            {
                public const string ContactIndex = "~/Modules/Organization/Contact/ContactIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
