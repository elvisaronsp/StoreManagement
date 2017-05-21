var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            var Methods;
            (function (Methods) {
            })(Methods = SergenService.Methods || (SergenService.Methods = {}));
            ['ListConnections', 'ListTables', 'Generate'].forEach(function (x) {
                SergenService[x] = function (r, s, o) { return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SergenService.baseUrl + '/' + x;
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaForm = (function (_super) {
            __extends(MeetingAgendaForm, _super);
            function MeetingAgendaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaForm.formKey = 'Meeting.MeetingAgenda';
        Meeting.MeetingAgendaForm = MeetingAgendaForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['AgendaNumber', function () { return Serenity.IntegerEditor; }], ['Title', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['AgendaTypeId', function () { return Serenity.IntegerEditor; }], ['RequestedByContactId', function () { return Serenity.IntegerEditor; }], ['Images', function () { return Serenity.MultipleImageUploadEditor; }], ['Attachments', function () { return Serenity.MultipleImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantForm = (function (_super) {
            __extends(MeetingAgendaRelevantForm, _super);
            function MeetingAgendaRelevantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaRelevantForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaRelevantForm.formKey = 'Meeting.MeetingAgendaRelevant';
        Meeting.MeetingAgendaRelevantForm = MeetingAgendaRelevantForm;
        [['AgendaId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaRelevantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantRow;
        (function (MeetingAgendaRelevantRow) {
            MeetingAgendaRelevantRow.idProperty = 'AgendaRelevantId';
            MeetingAgendaRelevantRow.localTextPrefix = 'Meeting.MeetingAgendaRelevant';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaRelevantRow.Fields || (MeetingAgendaRelevantRow.Fields = {}));
            ['AgendaRelevantId', 'AgendaId', 'ContactId', 'AgendaMeetingId', 'AgendaAgendaNumber', 'AgendaTitle', 'AgendaDescription', 'AgendaAgendaTypeId', 'AgendaRequestedByContactId', 'AgendaImages', 'AgendaAttachments', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaRelevantRow = Meeting.MeetingAgendaRelevantRow || (Meeting.MeetingAgendaRelevantRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantService;
        (function (MeetingAgendaRelevantService) {
            MeetingAgendaRelevantService.baseUrl = 'Meeting/MeetingAgendaRelevant';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaRelevantService.Methods || (MeetingAgendaRelevantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaRelevantService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaRelevantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaRelevantService.baseUrl + '/' + x;
            });
        })(MeetingAgendaRelevantService = Meeting.MeetingAgendaRelevantService || (Meeting.MeetingAgendaRelevantService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRow;
        (function (MeetingAgendaRow) {
            MeetingAgendaRow.idProperty = 'AgendaId';
            MeetingAgendaRow.nameProperty = 'Title';
            MeetingAgendaRow.localTextPrefix = 'Meeting.MeetingAgenda';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaRow.Fields || (MeetingAgendaRow.Fields = {}));
            ['AgendaId', 'MeetingId', 'AgendaNumber', 'Title', 'Description', 'AgendaTypeId', 'RequestedByContactId', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaTypeName', 'RequestedByContactTitle', 'RequestedByContactFirstName', 'RequestedByContactLastName', 'RequestedByContactFullName', 'RequestedByContactEmail', 'RequestedByContactIdentityNo', 'RequestedByContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaRow = Meeting.MeetingAgendaRow || (Meeting.MeetingAgendaRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaService;
        (function (MeetingAgendaService) {
            MeetingAgendaService.baseUrl = 'Meeting/MeetingAgenda';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaService.Methods || (MeetingAgendaService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaService.baseUrl + '/' + x;
            });
        })(MeetingAgendaService = Meeting.MeetingAgendaService || (Meeting.MeetingAgendaService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeForm = (function (_super) {
            __extends(MeetingAgendaTypeForm, _super);
            function MeetingAgendaTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaTypeForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaTypeForm.formKey = 'Meeting.MeetingAgendaType';
        Meeting.MeetingAgendaTypeForm = MeetingAgendaTypeForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeRow;
        (function (MeetingAgendaTypeRow) {
            MeetingAgendaTypeRow.idProperty = 'AgendaTypeId';
            MeetingAgendaTypeRow.nameProperty = 'Name';
            MeetingAgendaTypeRow.localTextPrefix = 'Meeting.MeetingAgendaType';
            MeetingAgendaTypeRow.lookupKey = 'Meeting.MeetingAgendaType';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingAgendaType');
            }
            MeetingAgendaTypeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaTypeRow.Fields || (MeetingAgendaTypeRow.Fields = {}));
            ['AgendaTypeId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaTypeRow = Meeting.MeetingAgendaTypeRow || (Meeting.MeetingAgendaTypeRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeService;
        (function (MeetingAgendaTypeService) {
            MeetingAgendaTypeService.baseUrl = 'Meeting/MeetingAgendaType';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaTypeService.Methods || (MeetingAgendaTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaTypeService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaTypeService.baseUrl + '/' + x;
            });
        })(MeetingAgendaTypeService = Meeting.MeetingAgendaTypeService || (Meeting.MeetingAgendaTypeService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendanceStatus;
        (function (MeetingAttendanceStatus) {
            MeetingAttendanceStatus[MeetingAttendanceStatus["NotSet"] = 0] = "NotSet";
            MeetingAttendanceStatus[MeetingAttendanceStatus["Attended"] = 1] = "Attended";
            MeetingAttendanceStatus[MeetingAttendanceStatus["Absent"] = 2] = "Absent";
            MeetingAttendanceStatus[MeetingAttendanceStatus["AbsentWithPermission"] = 3] = "AbsentWithPermission";
        })(MeetingAttendanceStatus = Meeting.MeetingAttendanceStatus || (Meeting.MeetingAttendanceStatus = {}));
        Serenity.Decorators.registerEnum(MeetingAttendanceStatus, 'Meeting.MeetingAttendanceStatus');
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeForm = (function (_super) {
            __extends(MeetingAttendeeForm, _super);
            function MeetingAttendeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAttendeeForm;
        }(Serenity.PrefixedContext));
        MeetingAttendeeForm.formKey = 'Meeting.MeetingAttendee';
        Meeting.MeetingAttendeeForm = MeetingAttendeeForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }], ['AttendeeType', function () { return Serenity.EnumEditor; }], ['AttendanceStatus', function () { return Serenity.EnumEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAttendeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeRow;
        (function (MeetingAttendeeRow) {
            MeetingAttendeeRow.idProperty = 'AttendeeId';
            MeetingAttendeeRow.localTextPrefix = 'Meeting.MeetingAttendee';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAttendeeRow.Fields || (MeetingAttendeeRow.Fields = {}));
            ['AttendeeId', 'MeetingId', 'ContactId', 'AttendeeType', 'AttendanceStatus', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactFullName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAttendeeRow = Meeting.MeetingAttendeeRow || (Meeting.MeetingAttendeeRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeType;
        (function (MeetingAttendeeType) {
            MeetingAttendeeType[MeetingAttendeeType["Attendee"] = 1] = "Attendee";
            MeetingAttendeeType[MeetingAttendeeType["Guest"] = 2] = "Guest";
        })(MeetingAttendeeType = Meeting.MeetingAttendeeType || (Meeting.MeetingAttendeeType = {}));
        Serenity.Decorators.registerEnum(MeetingAttendeeType, 'Meeting.MeetingAttendeeType');
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionForm = (function (_super) {
            __extends(MeetingDecisionForm, _super);
            function MeetingDecisionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingDecisionForm;
        }(Serenity.PrefixedContext));
        MeetingDecisionForm.formKey = 'Meeting.MeetingDecision';
        Meeting.MeetingDecisionForm = MeetingDecisionForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['AgendaId', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['DecisionNumber', function () { return Serenity.IntegerEditor; }], ['ResponsibleContactId', function () { return Serenity.IntegerEditor; }], ['DueDate', function () { return Serenity.DateEditor; }], ['ResolutionStatus', function () { return Serenity.IntegerEditor; }], ['Images', function () { return Serenity.StringEditor; }], ['Attachments', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingDecisionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantForm = (function (_super) {
            __extends(MeetingDecisionRelevantForm, _super);
            function MeetingDecisionRelevantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingDecisionRelevantForm;
        }(Serenity.PrefixedContext));
        MeetingDecisionRelevantForm.formKey = 'Meeting.MeetingDecisionRelevant';
        Meeting.MeetingDecisionRelevantForm = MeetingDecisionRelevantForm;
        [['DecisionId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingDecisionRelevantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantRow;
        (function (MeetingDecisionRelevantRow) {
            MeetingDecisionRelevantRow.idProperty = 'DecisionRelevantId';
            MeetingDecisionRelevantRow.localTextPrefix = 'Meeting.MeetingDecisionRelevant';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingDecisionRelevantRow.Fields || (MeetingDecisionRelevantRow.Fields = {}));
            ['DecisionRelevantId', 'DecisionId', 'ContactId', 'DecisionMeetingId', 'DecisionAgendaId', 'DecisionDescription', 'DecisionDecisionNumber', 'DecisionResponsibleContactId', 'DecisionDueDate', 'DecisionResolutionStatus', 'DecisionImages', 'DecisionAttachments', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingDecisionRelevantRow = Meeting.MeetingDecisionRelevantRow || (Meeting.MeetingDecisionRelevantRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantService;
        (function (MeetingDecisionRelevantService) {
            MeetingDecisionRelevantService.baseUrl = 'Meeting/MeetingDecisionRelevant';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingDecisionRelevantService.Methods || (MeetingDecisionRelevantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingDecisionRelevantService[x] = function (r, s, o) { return Q.serviceRequest(MeetingDecisionRelevantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingDecisionRelevantService.baseUrl + '/' + x;
            });
        })(MeetingDecisionRelevantService = Meeting.MeetingDecisionRelevantService || (Meeting.MeetingDecisionRelevantService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRow;
        (function (MeetingDecisionRow) {
            MeetingDecisionRow.idProperty = 'DecisionId';
            MeetingDecisionRow.nameProperty = 'Description';
            MeetingDecisionRow.localTextPrefix = 'Meeting.MeetingDecision';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingDecisionRow.Fields || (MeetingDecisionRow.Fields = {}));
            ['DecisionId', 'MeetingId', 'AgendaId', 'Description', 'DecisionNumber', 'ResponsibleContactId', 'DueDate', 'ResolutionStatus', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaMeetingId', 'AgendaNumber', 'AgendaTitle', 'AgendaDescription', 'AgendaAgendaTypeId', 'AgendaRequestedByContactId', 'AgendaImages', 'AgendaAttachments', 'DecisionNumberName', 'ResponsibleContactTitle', 'ResponsibleContactFirstName', 'ResponsibleContactLastName', 'ResponsibleContactFullName', 'ResponsibleContactEmail', 'ResponsibleContactIdentityNo', 'ResponsibleContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingDecisionRow = Meeting.MeetingDecisionRow || (Meeting.MeetingDecisionRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionService;
        (function (MeetingDecisionService) {
            MeetingDecisionService.baseUrl = 'Meeting/MeetingDecision';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingDecisionService.Methods || (MeetingDecisionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingDecisionService[x] = function (r, s, o) { return Q.serviceRequest(MeetingDecisionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingDecisionService.baseUrl + '/' + x;
            });
        })(MeetingDecisionService = Meeting.MeetingDecisionService || (Meeting.MeetingDecisionService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingForm = (function (_super) {
            __extends(MeetingForm, _super);
            function MeetingForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingForm;
        }(Serenity.PrefixedContext));
        MeetingForm.formKey = 'Meeting.Meeting';
        Meeting.MeetingForm = MeetingForm;
        [['MeetingName', function () { return Serenity.StringEditor; }], ['MeetingTypeId', function () { return Serenity.LookupEditor; }], ['MeetingNumber', function () { return Serenity.StringEditor; }], ['StartDate', function () { return Serenity.DateTimeEditor; }], ['EndDate', function () { return Serenity.DateTimeEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['UnitId', function () { return FruitCorrect.Organization.BusinessUnitEditor; }], ['OrganizerContactId', function () { return Serenity.LookupEditor; }], ['ReporterContactId', function () { return Serenity.LookupEditor; }], ['AttendeeList', function () { return Meeting.MeetingAttendeeEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationForm = (function (_super) {
            __extends(MeetingLocationForm, _super);
            function MeetingLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingLocationForm;
        }(Serenity.PrefixedContext));
        MeetingLocationForm.formKey = 'Meeting.MeetingLocation';
        Meeting.MeetingLocationForm = MeetingLocationForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Latitude', function () { return Serenity.DecimalEditor; }], ['Longitude', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationRow;
        (function (MeetingLocationRow) {
            MeetingLocationRow.idProperty = 'LocationId';
            MeetingLocationRow.nameProperty = 'Name';
            MeetingLocationRow.localTextPrefix = 'Meeting.MeetingLocation';
            MeetingLocationRow.lookupKey = 'Meeting.MeetingLocation';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingLocation');
            }
            MeetingLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingLocationRow.Fields || (MeetingLocationRow.Fields = {}));
            ['LocationId', 'Name', 'Address', 'Latitude', 'Longitude'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingLocationRow = Meeting.MeetingLocationRow || (Meeting.MeetingLocationRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationService;
        (function (MeetingLocationService) {
            MeetingLocationService.baseUrl = 'Meeting/MeetingLocation';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingLocationService.Methods || (MeetingLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingLocationService[x] = function (r, s, o) { return Q.serviceRequest(MeetingLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingLocationService.baseUrl + '/' + x;
            });
        })(MeetingLocationService = Meeting.MeetingLocationService || (Meeting.MeetingLocationService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingRow;
        (function (MeetingRow) {
            MeetingRow.idProperty = 'MeetingId';
            MeetingRow.nameProperty = 'MeetingName';
            MeetingRow.localTextPrefix = 'Meeting.Meeting';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingRow.Fields || (MeetingRow.Fields = {}));
            ['MeetingId', 'MeetingName', 'MeetingNumber', 'MeetingGuid', 'MeetingTypeId', 'StartDate', 'EndDate', 'LocationId', 'UnitId', 'OrganizerContactId', 'ReporterContactId', 'MeetingTypeName', 'LocationName', 'UnitName', 'UnitParentUnitId', 'OrganizerContactTitle', 'OrganizerContactFirstName', 'OrganizerContactLastName', 'OrganizerContactFullName', 'OrganizerContactEmail', 'OrganizerContactIdentityNo', 'OrganizerContactUserId', 'ReporterContactTitle', 'ReporterContactFirstName', 'ReporterContactLastName', 'ReporterContactFullName', 'ReporterContactEmail', 'ReporterContactIdentityNo', 'ReporterContactUserId', 'AttendeeList', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingRow = Meeting.MeetingRow || (Meeting.MeetingRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingService;
        (function (MeetingService) {
            MeetingService.baseUrl = 'Meeting/Meeting';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingService.Methods || (MeetingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingService[x] = function (r, s, o) { return Q.serviceRequest(MeetingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingService.baseUrl + '/' + x;
            });
        })(MeetingService = Meeting.MeetingService || (Meeting.MeetingService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeForm = (function (_super) {
            __extends(MeetingTypeForm, _super);
            function MeetingTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingTypeForm;
        }(Serenity.PrefixedContext));
        MeetingTypeForm.formKey = 'Meeting.MeetingType';
        Meeting.MeetingTypeForm = MeetingTypeForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeRow;
        (function (MeetingTypeRow) {
            MeetingTypeRow.idProperty = 'MeetingTypeId';
            MeetingTypeRow.nameProperty = 'Name';
            MeetingTypeRow.localTextPrefix = 'Meeting.MeetingType';
            MeetingTypeRow.lookupKey = 'Meeting.MeetingType';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingType');
            }
            MeetingTypeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingTypeRow.Fields || (MeetingTypeRow.Fields = {}));
            ['MeetingTypeId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingTypeRow = Meeting.MeetingTypeRow || (Meeting.MeetingTypeRow = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeService;
        (function (MeetingTypeService) {
            MeetingTypeService.baseUrl = 'Meeting/MeetingType';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingTypeService.Methods || (MeetingTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingTypeService[x] = function (r, s, o) { return Q.serviceRequest(MeetingTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingTypeService.baseUrl + '/' + x;
            });
        })(MeetingTypeService = Meeting.MeetingTypeService || (Meeting.MeetingTypeService = {}));
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CategoryForm;
        }(Serenity.PrefixedContext));
        CategoryForm.formKey = 'Northwind.Category';
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['ParentCategoryId', function () { return FruitCorrect.Organization.BusinessUnitEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'ParentCategoryID', 'Picture', 'ParentCategoryName'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDetailsRow.Fields || (CustomerDetailsRow.Fields = {}));
            ['Id', 'Email', 'BulstatEIK', 'DdsNumber', 'BankAccount', 'SendBulletin'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CustomerForm;
        }(Serenity.PrefixedContext));
        CustomerForm.formKey = 'Northwind.Customer';
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Northwind.NotesEditor; }], ['BulstatEIK', function () { return Serenity.StringEditor; }], ['DdsNumber', function () { return Serenity.StringEditor; }], ['BankAccount', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['SendBulletin', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'BasicSamples.GrossSales';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerGrossSalesRow.Fields || (CustomerGrossSalesRow.Fields = {}));
            ['CustomerId', 'ContactName', 'ProductId', 'ProductName', 'GrossAmount'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives', 'Email', 'SendBulletin', 'BulstatEIK', 'DdsNumber', 'BankAccount'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeForm = (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        EmployeeForm.formKey = 'Northwind.Employee';
        Northwind.EmployeeForm = EmployeeForm;
        [['FirstName', function () { return Serenity.StringEditor; }], ['LastName', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.EnumEditor; }], ['BirthDate', function () { return Serenity.DateEditor; }], ['HireDate', function () { return Serenity.DateEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'BirthDate', 'HireDate', 'Address', 'City', 'Country', 'Photo', 'Notes', 'PhotoPath', 'Gender'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Northwind/Employee';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeService.Methods || (EmployeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeService.baseUrl + '/' + x;
            });
        })(EmployeeService = Northwind.EmployeeService || (Northwind.EmployeeService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'FruitCorrect.Northwind.Entities.Gender');
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        OrderDetailForm.formKey = 'Northwind.OrderDetail';
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['PhisicalQuantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'PhisicalQuantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrderForm;
        }(Serenity.PrefixedContext));
        OrderForm.formKey = 'Northwind.Order';
        Northwind.OrderForm = OrderForm;
        [['CustomerID', function () { return Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Northwind.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.OrderShipCity';
            function getLookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProductForm;
        }(Serenity.PrefixedContext));
        ProductForm.formKey = 'Northwind.Product';
        Northwind.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['ExpirationDate', function () { return Serenity.DateEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductId', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'ExpirationDate', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RegionForm;
        }(Serenity.PrefixedContext));
        RegionForm.formKey = 'Northwind.Region';
        Northwind.RegionForm = RegionForm;
        [['RegionID', function () { return Serenity.IntegerEditor; }], ['RegionDescription', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RegionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ['RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            var Methods;
            (function (Methods) {
            })(Methods = RegionService.Methods || (RegionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RegionService[x] = function (r, s, o) { return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RegionService.baseUrl + '/' + x;
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            var Methods;
            (function (Methods) {
            })(Methods = SalesByCategoryService.Methods || (SalesByCategoryService.Methods = {}));
            ['List'].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) { return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SalesByCategoryService.baseUrl + '/' + x;
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ShipperForm;
        }(Serenity.PrefixedContext));
        ShipperForm.formKey = 'Northwind.Shipper';
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Northwind.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SupplierForm;
        }(Serenity.PrefixedContext));
        SupplierForm.formKey = 'Northwind.Supplier';
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        TerritoryForm.formKey = 'Northwind.Territory';
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', function () { return Serenity.StringEditor; }], ['TerritoryDescription', function () { return Serenity.StringEditor; }], ['RegionID', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TerritoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            var Methods;
            (function (Methods) {
            })(Methods = TerritoryService.Methods || (TerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) { return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TerritoryService.baseUrl + '/' + x;
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitForm = (function (_super) {
            __extends(BusinessUnitForm, _super);
            function BusinessUnitForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BusinessUnitForm;
        }(Serenity.PrefixedContext));
        BusinessUnitForm.formKey = 'Organization.BusinessUnit';
        Organization.BusinessUnitForm = BusinessUnitForm;
        [['Name', function () { return Serenity.StringEditor; }], ['ParentUnitId', function () { return Organization.BusinessUnitEditor; }]].forEach(function (x) { return Object.defineProperty(BusinessUnitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitRow;
        (function (BusinessUnitRow) {
            BusinessUnitRow.idProperty = 'UnitId';
            BusinessUnitRow.nameProperty = 'Name';
            BusinessUnitRow.localTextPrefix = 'Organization.BusinessUnit';
            BusinessUnitRow.lookupKey = 'Organization.BusinessUnit';
            function getLookup() {
                return Q.getLookup('Organization.BusinessUnit');
            }
            BusinessUnitRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = BusinessUnitRow.Fields || (BusinessUnitRow.Fields = {}));
            ['UnitId', 'Name', 'ParentUnitId', 'ParentUnitName', 'ParentUnitParentUnitId'].forEach(function (x) { return Fields[x] = x; });
        })(BusinessUnitRow = Organization.BusinessUnitRow || (Organization.BusinessUnitRow = {}));
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitService;
        (function (BusinessUnitService) {
            BusinessUnitService.baseUrl = 'Organization/BusinessUnit';
            var Methods;
            (function (Methods) {
            })(Methods = BusinessUnitService.Methods || (BusinessUnitService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BusinessUnitService[x] = function (r, s, o) { return Q.serviceRequest(BusinessUnitService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BusinessUnitService.baseUrl + '/' + x;
            });
        })(BusinessUnitService = Organization.BusinessUnitService || (Organization.BusinessUnitService = {}));
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var ContactForm = (function (_super) {
            __extends(ContactForm, _super);
            function ContactForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ContactForm;
        }(Serenity.PrefixedContext));
        ContactForm.formKey = 'Organization.Contact';
        Organization.ContactForm = ContactForm;
        [['Title', function () { return Serenity.StringEditor; }], ['FirstName', function () { return Serenity.StringEditor; }], ['LastName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['IdentityNo', function () { return Serenity.StringEditor; }], ['UserId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ContactForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var ContactRow;
        (function (ContactRow) {
            ContactRow.idProperty = 'ContactId';
            ContactRow.nameProperty = 'FullName';
            ContactRow.localTextPrefix = 'Organization.Contact';
            ContactRow.lookupKey = 'Organization.Contact';
            function getLookup() {
                return Q.getLookup('Organization.Contact');
            }
            ContactRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ContactRow.Fields || (ContactRow.Fields = {}));
            ['ContactId', 'Title', 'FirstName', 'LastName', 'FullName', 'Email', 'IdentityNo', 'UserId', 'Username', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive'].forEach(function (x) { return Fields[x] = x; });
        })(ContactRow = Organization.ContactRow || (Organization.ContactRow = {}));
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var ContactService;
        (function (ContactService) {
            ContactService.baseUrl = 'Organization/Contact';
            var Methods;
            (function (Methods) {
            })(Methods = ContactService.Methods || (ContactService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ContactService[x] = function (r, s, o) { return Q.serviceRequest(ContactService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ContactService.baseUrl + '/' + x;
            });
        })(ContactService = Organization.ContactService || (Organization.ContactService = {}));
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var SergenPanel = (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = FruitCorrect.Authorization || (FruitCorrect.Authorization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = FruitCorrect.Administration || (FruitCorrect.Administration = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    FruitCorrect.BasicProgressDialog = BasicProgressDialog;
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new FruitCorrect.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = FruitCorrect.DialogUtils || (FruitCorrect.DialogUtils = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = FruitCorrect.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = FruitCorrect.LanguageList || (FruitCorrect.LanguageList = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('FruitCorrect');
        Serenity.EntityDialog.defaultLanguageList = FruitCorrect.LanguageList.getValue;
    })(ScriptInitialization = FruitCorrect.ScriptInitialization || (FruitCorrect.ScriptInitialization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = FruitCorrect.Common || (FruitCorrect.Common = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDialog = (function (_super) {
            __extends(MeetingDialog, _super);
            function MeetingDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingForm(_this.idPrefix);
                _this.agendaGrid = new Meeting.MeetingAgendaGrid(_this.byId('AgendaGrid'));
                _this.decisionGrid = new Meeting.MeetingDecisionGrid(_this.byId('DecisionGrid'));
                _this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-maximize').click();
                _this.form.EndDate.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.EndDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate > _this.form.EndDate.valueAsDate) {
                        return "End Date can't be earlier than Start Date";
                    }
                    return null;
                });
                return _this;
            }
            MeetingDialog.prototype.getFormKey = function () { return Meeting.MeetingForm.formKey; };
            MeetingDialog.prototype.getIdProperty = function () { return Meeting.MeetingRow.idProperty; };
            MeetingDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingRow.localTextPrefix; };
            MeetingDialog.prototype.getNameProperty = function () { return Meeting.MeetingRow.nameProperty; };
            MeetingDialog.prototype.getService = function () { return Meeting.MeetingService.baseUrl; };
            MeetingDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                var attendeeGrid = this.form.AttendeeList.element.find('.grid-container');
                attendeeGrid.css('height', Math.max(150, this.element.height() - attendeeGrid.position().top - 15) + 'px')
                    .triggerHandler('layout');
            };
            MeetingDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Agenda', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Decision', this.isNewOrDeleted());
                //this.agendaGrid.customerID = entity.CustomerID;
            };
            return MeetingDialog;
        }(Serenity.EntityDialog));
        MeetingDialog = __decorate([
            Serenity.Decorators.maximizable(),
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDialog);
        Meeting.MeetingDialog = MeetingDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingGrid = (function (_super) {
            __extends(MeetingGrid, _super);
            function MeetingGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingGrid.prototype.getColumnsKey = function () { return 'Meeting.Meeting'; };
            MeetingGrid.prototype.getDialogType = function () { return Meeting.MeetingDialog; };
            MeetingGrid.prototype.getIdProperty = function () { return Meeting.MeetingRow.idProperty; };
            MeetingGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingRow.localTextPrefix; };
            MeetingGrid.prototype.getService = function () { return Meeting.MeetingService.baseUrl; };
            return MeetingGrid;
        }(Serenity.EntityGrid));
        MeetingGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingGrid);
        Meeting.MeetingGrid = MeetingGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaDialog = (function (_super) {
            __extends(MeetingAgendaDialog, _super);
            function MeetingAgendaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaForm.formKey; };
            MeetingAgendaDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRow.idProperty; };
            MeetingAgendaDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRow.localTextPrefix; };
            MeetingAgendaDialog.prototype.getNameProperty = function () { return Meeting.MeetingAgendaRow.nameProperty; };
            MeetingAgendaDialog.prototype.getService = function () { return Meeting.MeetingAgendaService.baseUrl; };
            return MeetingAgendaDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaDialog);
        Meeting.MeetingAgendaDialog = MeetingAgendaDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaGrid = (function (_super) {
            __extends(MeetingAgendaGrid, _super);
            function MeetingAgendaGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgenda'; };
            MeetingAgendaGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaDialog; };
            MeetingAgendaGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRow.idProperty; };
            MeetingAgendaGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRow.localTextPrefix; };
            MeetingAgendaGrid.prototype.getService = function () { return Meeting.MeetingAgendaService.baseUrl; };
            MeetingAgendaGrid.prototype.addButtonClick = function () {
                this.editItem({ MeetingId: this.meetingId });
            };
            MeetingAgendaGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MeetingAgendaGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.meetingId;
            };
            Object.defineProperty(MeetingAgendaGrid.prototype, "meetingId", {
                get: function () {
                    return this._meetingId;
                },
                set: function (value) {
                    if (this._meetingId !== value) {
                        this._meetingId = value;
                        this.setEquality('MeetingId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MeetingAgendaGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaGrid);
        Meeting.MeetingAgendaGrid = MeetingAgendaGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantDialog = (function (_super) {
            __extends(MeetingAgendaRelevantDialog, _super);
            function MeetingAgendaRelevantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaRelevantForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaRelevantDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaRelevantForm.formKey; };
            MeetingAgendaRelevantDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRelevantRow.idProperty; };
            MeetingAgendaRelevantDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRelevantRow.localTextPrefix; };
            MeetingAgendaRelevantDialog.prototype.getService = function () { return Meeting.MeetingAgendaRelevantService.baseUrl; };
            return MeetingAgendaRelevantDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaRelevantDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaRelevantDialog);
        Meeting.MeetingAgendaRelevantDialog = MeetingAgendaRelevantDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantGrid = (function (_super) {
            __extends(MeetingAgendaRelevantGrid, _super);
            function MeetingAgendaRelevantGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaRelevantGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgendaRelevant'; };
            MeetingAgendaRelevantGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaRelevantDialog; };
            MeetingAgendaRelevantGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRelevantRow.idProperty; };
            MeetingAgendaRelevantGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRelevantRow.localTextPrefix; };
            MeetingAgendaRelevantGrid.prototype.getService = function () { return Meeting.MeetingAgendaRelevantService.baseUrl; };
            return MeetingAgendaRelevantGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaRelevantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaRelevantGrid);
        Meeting.MeetingAgendaRelevantGrid = MeetingAgendaRelevantGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeDialog = (function (_super) {
            __extends(MeetingAgendaTypeDialog, _super);
            function MeetingAgendaTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaTypeForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaTypeDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaTypeForm.formKey; };
            MeetingAgendaTypeDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaTypeRow.idProperty; };
            MeetingAgendaTypeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaTypeRow.localTextPrefix; };
            MeetingAgendaTypeDialog.prototype.getNameProperty = function () { return Meeting.MeetingAgendaTypeRow.nameProperty; };
            MeetingAgendaTypeDialog.prototype.getService = function () { return Meeting.MeetingAgendaTypeService.baseUrl; };
            return MeetingAgendaTypeDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaTypeDialog);
        Meeting.MeetingAgendaTypeDialog = MeetingAgendaTypeDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeGrid = (function (_super) {
            __extends(MeetingAgendaTypeGrid, _super);
            function MeetingAgendaTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaTypeGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgendaType'; };
            MeetingAgendaTypeGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaTypeDialog; };
            MeetingAgendaTypeGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaTypeRow.idProperty; };
            MeetingAgendaTypeGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaTypeRow.localTextPrefix; };
            MeetingAgendaTypeGrid.prototype.getService = function () { return Meeting.MeetingAgendaTypeService.baseUrl; };
            return MeetingAgendaTypeGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaTypeGrid);
        Meeting.MeetingAgendaTypeGrid = MeetingAgendaTypeGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeDialog = (function (_super) {
            __extends(MeetingAttendeeDialog, _super);
            function MeetingAttendeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAttendeeForm(_this.idPrefix);
                return _this;
            }
            MeetingAttendeeDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeeForm.formKey; };
            MeetingAttendeeDialog.prototype.getIdProperty = function () { return Meeting.MeetingAttendeeRow.idProperty; };
            MeetingAttendeeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeeRow.localTextPrefix; };
            return MeetingAttendeeDialog;
        }(FruitCorrect.Common.GridEditorDialog));
        MeetingAttendeeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAttendeeDialog);
        Meeting.MeetingAttendeeDialog = MeetingAttendeeDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeEditor = (function (_super) {
            __extends(MeetingAttendeeEditor, _super);
            function MeetingAttendeeEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.slickContainer.on('change', 'select', function (e) {
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell)
                        return;
                    var item = _this.itemAt(cell.row);
                    var field = _this.slickGrid.getColumns()[cell.cell].field;
                    item[field] = Q.toId($(e.target).val());
                    _this.view.updateItem(_this.id(item), item);
                });
                return _this;
            }
            MeetingAttendeeEditor.prototype.getColumnsKey = function () { return 'Meeting.MeetingAttendee'; };
            MeetingAttendeeEditor.prototype.getDialogType = function () { return Meeting.MeetingAttendeeDialog; };
            MeetingAttendeeEditor.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeeRow.localTextPrefix; };
            MeetingAttendeeEditor.prototype.getButtons = function () {
                return [];
            };
            MeetingAttendeeEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: FruitCorrect.Organization.ContactRow.lookupKey
                    },
                    element: function (e) { return e.attr('placeholder', '--select contact to add--').appendTo(_this.toolbar.element); },
                    init: function (w) { return w.changeSelect2(function (x) {
                        if (Q.isEmptyOrNull(w.value))
                            return;
                        var contact = FruitCorrect.Organization.ContactRow.getLookup().itemById[Q.toId(w.value)];
                        w.value = null;
                        if (!contact)
                            return;
                        if (Q.any(_this.getItems(), function (i) { return i.ContactId == contact.ContactId; })) {
                            Q.notifyWarning("Contact is already in attendee list!");
                            return;
                        }
                        var item = {
                            ContactId: contact.ContactId,
                            ContactFullName: contact.FullName,
                            AttendeeType: Meeting.MeetingAttendeeType.Attendee,
                            AttendanceStatus: Meeting.MeetingAttendanceStatus.NotSet
                        };
                        _this.setNewId(item);
                        var items = _this.getItems().slice();
                        items.push(item);
                        items.sort(function (a, b) { return Q.turkishLocaleCompare(a.ContactFullName, b.ContactFullName); });
                        _this.setItems(items);
                    }); }
                });
            };
            MeetingAttendeeEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Remove Attendee',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-times text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            MeetingAttendeeEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        var items = this.getItems();
                        items.splice(row, 1);
                        this.setItems(items);
                    }
                }
            };
            return MeetingAttendeeEditor;
        }(FruitCorrect.Common.GridEditorBase));
        MeetingAttendeeEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAttendeeEditor);
        Meeting.MeetingAttendeeEditor = MeetingAttendeeEditor;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionDialog = (function (_super) {
            __extends(MeetingDecisionDialog, _super);
            function MeetingDecisionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingDecisionForm(_this.idPrefix);
                return _this;
            }
            MeetingDecisionDialog.prototype.getFormKey = function () { return Meeting.MeetingDecisionForm.formKey; };
            MeetingDecisionDialog.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRow.idProperty; };
            MeetingDecisionDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRow.localTextPrefix; };
            MeetingDecisionDialog.prototype.getNameProperty = function () { return Meeting.MeetingDecisionRow.nameProperty; };
            MeetingDecisionDialog.prototype.getService = function () { return Meeting.MeetingDecisionService.baseUrl; };
            return MeetingDecisionDialog;
        }(Serenity.EntityDialog));
        MeetingDecisionDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDecisionDialog);
        Meeting.MeetingDecisionDialog = MeetingDecisionDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionGrid = (function (_super) {
            __extends(MeetingDecisionGrid, _super);
            function MeetingDecisionGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingDecisionGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingDecision'; };
            MeetingDecisionGrid.prototype.getDialogType = function () { return Meeting.MeetingDecisionDialog; };
            MeetingDecisionGrid.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRow.idProperty; };
            MeetingDecisionGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRow.localTextPrefix; };
            MeetingDecisionGrid.prototype.getService = function () { return Meeting.MeetingDecisionService.baseUrl; };
            MeetingDecisionGrid.prototype.addButtonClick = function () {
                this.editItem({ MeetingId: this.meetingId });
            };
            MeetingDecisionGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MeetingDecisionGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.meetingId;
            };
            Object.defineProperty(MeetingDecisionGrid.prototype, "meetingId", {
                get: function () {
                    return this._meetingId;
                },
                set: function (value) {
                    if (this._meetingId !== value) {
                        this._meetingId = value;
                        this.setEquality('MeetingId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MeetingDecisionGrid;
        }(Serenity.EntityGrid));
        MeetingDecisionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingDecisionGrid);
        Meeting.MeetingDecisionGrid = MeetingDecisionGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantDialog = (function (_super) {
            __extends(MeetingDecisionRelevantDialog, _super);
            function MeetingDecisionRelevantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingDecisionRelevantForm(_this.idPrefix);
                return _this;
            }
            MeetingDecisionRelevantDialog.prototype.getFormKey = function () { return Meeting.MeetingDecisionRelevantForm.formKey; };
            MeetingDecisionRelevantDialog.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRelevantRow.idProperty; };
            MeetingDecisionRelevantDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRelevantRow.localTextPrefix; };
            MeetingDecisionRelevantDialog.prototype.getService = function () { return Meeting.MeetingDecisionRelevantService.baseUrl; };
            return MeetingDecisionRelevantDialog;
        }(Serenity.EntityDialog));
        MeetingDecisionRelevantDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDecisionRelevantDialog);
        Meeting.MeetingDecisionRelevantDialog = MeetingDecisionRelevantDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantGrid = (function (_super) {
            __extends(MeetingDecisionRelevantGrid, _super);
            function MeetingDecisionRelevantGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingDecisionRelevantGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingDecisionRelevant'; };
            MeetingDecisionRelevantGrid.prototype.getDialogType = function () { return Meeting.MeetingDecisionRelevantDialog; };
            MeetingDecisionRelevantGrid.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRelevantRow.idProperty; };
            MeetingDecisionRelevantGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRelevantRow.localTextPrefix; };
            MeetingDecisionRelevantGrid.prototype.getService = function () { return Meeting.MeetingDecisionRelevantService.baseUrl; };
            return MeetingDecisionRelevantGrid;
        }(Serenity.EntityGrid));
        MeetingDecisionRelevantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingDecisionRelevantGrid);
        Meeting.MeetingDecisionRelevantGrid = MeetingDecisionRelevantGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationDialog = (function (_super) {
            __extends(MeetingLocationDialog, _super);
            function MeetingLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingLocationForm(_this.idPrefix);
                return _this;
            }
            MeetingLocationDialog.prototype.getFormKey = function () { return Meeting.MeetingLocationForm.formKey; };
            MeetingLocationDialog.prototype.getIdProperty = function () { return Meeting.MeetingLocationRow.idProperty; };
            MeetingLocationDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingLocationRow.localTextPrefix; };
            MeetingLocationDialog.prototype.getNameProperty = function () { return Meeting.MeetingLocationRow.nameProperty; };
            MeetingLocationDialog.prototype.getService = function () { return Meeting.MeetingLocationService.baseUrl; };
            return MeetingLocationDialog;
        }(Serenity.EntityDialog));
        MeetingLocationDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingLocationDialog);
        Meeting.MeetingLocationDialog = MeetingLocationDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationGrid = (function (_super) {
            __extends(MeetingLocationGrid, _super);
            function MeetingLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingLocationGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingLocation'; };
            MeetingLocationGrid.prototype.getDialogType = function () { return Meeting.MeetingLocationDialog; };
            MeetingLocationGrid.prototype.getIdProperty = function () { return Meeting.MeetingLocationRow.idProperty; };
            MeetingLocationGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingLocationRow.localTextPrefix; };
            MeetingLocationGrid.prototype.getService = function () { return Meeting.MeetingLocationService.baseUrl; };
            return MeetingLocationGrid;
        }(Serenity.EntityGrid));
        MeetingLocationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingLocationGrid);
        Meeting.MeetingLocationGrid = MeetingLocationGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeDialog = (function (_super) {
            __extends(MeetingTypeDialog, _super);
            function MeetingTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingTypeForm(_this.idPrefix);
                return _this;
            }
            MeetingTypeDialog.prototype.getFormKey = function () { return Meeting.MeetingTypeForm.formKey; };
            MeetingTypeDialog.prototype.getIdProperty = function () { return Meeting.MeetingTypeRow.idProperty; };
            MeetingTypeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingTypeRow.localTextPrefix; };
            MeetingTypeDialog.prototype.getNameProperty = function () { return Meeting.MeetingTypeRow.nameProperty; };
            MeetingTypeDialog.prototype.getService = function () { return Meeting.MeetingTypeService.baseUrl; };
            return MeetingTypeDialog;
        }(Serenity.EntityDialog));
        MeetingTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingTypeDialog);
        Meeting.MeetingTypeDialog = MeetingTypeDialog;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeGrid = (function (_super) {
            __extends(MeetingTypeGrid, _super);
            function MeetingTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingTypeGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingType'; };
            MeetingTypeGrid.prototype.getDialogType = function () { return Meeting.MeetingTypeDialog; };
            MeetingTypeGrid.prototype.getIdProperty = function () { return Meeting.MeetingTypeRow.idProperty; };
            MeetingTypeGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingTypeRow.localTextPrefix; };
            MeetingTypeGrid.prototype.getService = function () { return Meeting.MeetingTypeService.baseUrl; };
            return MeetingTypeGrid;
        }(Serenity.EntityGrid));
        MeetingTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingTypeGrid);
        Meeting.MeetingTypeGrid = MeetingTypeGrid;
    })(Meeting = FruitCorrect.Meeting || (FruitCorrect.Meeting = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = FruitCorrect.Membership || (FruitCorrect.Membership = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            return CategoryDialog;
        }(Serenity.EntityDialog));
        CategoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryDialog);
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryEditor = (function (_super) {
            __extends(CategoryEditor, _super);
            function CategoryEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CategoryEditor.prototype.getLookupKey = function () {
                return Northwind.CategoryRow.lookupKey;
            };
            CategoryEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.CategoryName;
                while (item.ParentCategoryID != null && !visited[item.ParentCategoryID]) {
                    item = lookup.itemById[item.ParentCategoryID];
                    if (!item)
                        break;
                    visited[item.CategoryID] = true;
                    text = item.CategoryName + " >> " + text;
                }
                return text;
            };
            return CategoryEditor;
        }(Serenity.LookupEditorBase));
        CategoryEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], CategoryEditor);
        Northwind.CategoryEditor = CategoryEditor;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                var _this = _super.call(this, container) || this;
                // ReSharper disable once WrongExpressionStatement
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentCategoryID; },
                    toggleField: Northwind.CategoryRow.Fields.CategoryName,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Northwind.CategoryRow.lookupKey);
            };
            CategoryGrid.prototype.usePager = function () {
                return false;
            };
            CategoryGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == Northwind.CategoryRow.Fields.CategoryName; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            CategoryGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Northwind.CategoryDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentUnitId: item.CategoryID
                        });
                    }
                }
            };
            return CategoryGrid;
        }(Serenity.EntityGrid));
        CategoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryGrid);
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                _this.ordersGrid.element.flexHeightOnly(1);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                FruitCorrect.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            return CustomerDialog;
        }(Serenity.EntityDialog));
        CustomerDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerDialog);
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        CustomerEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], CustomerEditor);
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FruitCorrect.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(FruitCorrect.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            return CustomerGrid;
        }(Serenity.EntityGrid));
        CustomerGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], CustomerGrid);
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(FruitCorrect.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            return OrderDialog;
        }(Serenity.EntityDialog));
        OrderDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDialog);
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../Order/OrderDialog.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        CustomerOrderDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrderDialog);
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    }
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Northwind.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FruitCorrect.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(FruitCorrect.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        FruitCorrect.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            return OrderGrid;
        }(Serenity.EntityGrid));
        OrderGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], OrderGrid);
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../Order/OrderGrid.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Northwind.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        CustomerOrdersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrdersGrid);
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            return EmployeeListFormatter;
        }());
        EmployeeListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EmployeeListFormatter);
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeDialog = (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return Northwind.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Northwind.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Northwind.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Northwind.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return Northwind.EmployeeService.baseUrl; };
            EmployeeDialog.prototype.getLanguages = function () {
                return FruitCorrect.LanguageList.getValue();
            };
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        EmployeeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeDialog);
        Northwind.EmployeeDialog = EmployeeDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            return EmployeeFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EmployeeFormatter.prototype, "genderProperty", void 0);
        EmployeeFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], EmployeeFormatter);
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var EmployeeGrid = (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return "Northwind.Employee"; };
            EmployeeGrid.prototype.getDialogType = function () { return Northwind.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return Northwind.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return Northwind.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return Northwind.EmployeeService.baseUrl; };
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        EmployeeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeGrid);
        Northwind.EmployeeGrid = EmployeeGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        NoteDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NoteDialog);
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: FruitCorrect.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NotesEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.element("<div/>")
        ], NotesEditor);
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return FreightFormatter;
        }());
        FreightFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], FreightFormatter);
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            return OrderDetailDialog;
        }(FruitCorrect.Common.GridEditorDialog));
        OrderDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailDialog);
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            return OrderDetailsEditor;
        }(FruitCorrect.Common.GridEditorBase));
        OrderDetailsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailsEditor);
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            return ProductDialog;
        }(Serenity.EntityDialog));
        ProductDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], ProductDialog);
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FruitCorrect.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(FruitCorrect.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                //buttons.push({
                //    title: 'Save Changes',
                //    cssClass: 'apply-changes-button disabled',
                //    onClick: e => this.saveClick(),
                //    separator: true
                //});
                return buttons;
            };
            return ProductGrid;
        }(Serenity.EntityGrid));
        ProductGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], ProductGrid);
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return FruitCorrect.LanguageList.getValue();
            };
            return RegionDialog;
        }(Serenity.EntityDialog));
        RegionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionDialog);
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            return RegionGrid;
        }(Serenity.EntityGrid));
        RegionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionGrid);
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = PhoneEditor_1 = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            return PhoneEditor;
        }(Serenity.StringEditor));
        __decorate([
            Serenity.Decorators.option()
        ], PhoneEditor.prototype, "multiple", void 0);
        PhoneEditor = PhoneEditor_1 = __decorate([
            Serenity.Decorators.registerEditor()
        ], PhoneEditor);
        Northwind.PhoneEditor = PhoneEditor;
        var PhoneEditor_1;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return FruitCorrect.LanguageList.getValue();
            };
            return ShipperDialog;
        }(Serenity.EntityDialog));
        ShipperDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperDialog);
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return ShipperFormatter;
        }());
        ShipperFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], ShipperFormatter);
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            return ShipperGrid;
        }(Serenity.EntityGrid));
        ShipperGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperGrid);
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return FruitCorrect.LanguageList.getValue();
            };
            return SupplierDialog;
        }(Serenity.EntityDialog));
        SupplierDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierDialog);
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            return SupplierGrid;
        }(Serenity.EntityGrid));
        SupplierGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierGrid);
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return FruitCorrect.LanguageList.getValue();
            };
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        TerritoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryDialog);
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        TerritoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryGrid);
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = FruitCorrect.Northwind || (FruitCorrect.Northwind = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitDialog = (function (_super) {
            __extends(BusinessUnitDialog, _super);
            function BusinessUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Organization.BusinessUnitForm(_this.idPrefix);
                return _this;
            }
            BusinessUnitDialog.prototype.getFormKey = function () { return Organization.BusinessUnitForm.formKey; };
            BusinessUnitDialog.prototype.getIdProperty = function () { return Organization.BusinessUnitRow.idProperty; };
            BusinessUnitDialog.prototype.getLocalTextPrefix = function () { return Organization.BusinessUnitRow.localTextPrefix; };
            BusinessUnitDialog.prototype.getNameProperty = function () { return Organization.BusinessUnitRow.nameProperty; };
            BusinessUnitDialog.prototype.getService = function () { return Organization.BusinessUnitService.baseUrl; };
            return BusinessUnitDialog;
        }(Serenity.EntityDialog));
        BusinessUnitDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BusinessUnitDialog);
        Organization.BusinessUnitDialog = BusinessUnitDialog;
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitEditor = (function (_super) {
            __extends(BusinessUnitEditor, _super);
            function BusinessUnitEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            BusinessUnitEditor.prototype.getLookupKey = function () {
                return Organization.BusinessUnitRow.lookupKey;
            };
            BusinessUnitEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Name;
                while (item.ParentUnitId != null && !visited[item.ParentUnitId]) {
                    item = lookup.itemById[item.ParentUnitId];
                    if (!item)
                        break;
                    visited[item.UnitId] = true;
                    text = item.Name + " >> " + text;
                }
                return text;
            };
            return BusinessUnitEditor;
        }(Serenity.LookupEditorBase));
        BusinessUnitEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], BusinessUnitEditor);
        Organization.BusinessUnitEditor = BusinessUnitEditor;
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var BusinessUnitGrid = (function (_super) {
            __extends(BusinessUnitGrid, _super);
            function BusinessUnitGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentUnitId; },
                    toggleField: Organization.BusinessUnitRow.Fields.Name,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            BusinessUnitGrid.prototype.getColumnsKey = function () { return 'Organization.BusinessUnit'; };
            BusinessUnitGrid.prototype.getDialogType = function () { return Organization.BusinessUnitDialog; };
            BusinessUnitGrid.prototype.getIdProperty = function () { return Organization.BusinessUnitRow.idProperty; };
            BusinessUnitGrid.prototype.getLocalTextPrefix = function () { return Organization.BusinessUnitRow.localTextPrefix; };
            BusinessUnitGrid.prototype.getService = function () { return Organization.BusinessUnitService.baseUrl; };
            BusinessUnitGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Organization.BusinessUnitRow.lookupKey);
            };
            BusinessUnitGrid.prototype.usePager = function () {
                return false;
            };
            BusinessUnitGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == Organization.BusinessUnitRow.Fields.Name; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            BusinessUnitGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Organization.BusinessUnitDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentUnitId: item.UnitId
                        });
                    }
                }
            };
            return BusinessUnitGrid;
        }(Serenity.EntityGrid));
        BusinessUnitGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BusinessUnitGrid);
        Organization.BusinessUnitGrid = BusinessUnitGrid;
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var ContactDialog = (function (_super) {
            __extends(ContactDialog, _super);
            function ContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Organization.ContactForm(_this.idPrefix);
                return _this;
            }
            ContactDialog.prototype.getFormKey = function () { return Organization.ContactForm.formKey; };
            ContactDialog.prototype.getIdProperty = function () { return Organization.ContactRow.idProperty; };
            ContactDialog.prototype.getLocalTextPrefix = function () { return Organization.ContactRow.localTextPrefix; };
            ContactDialog.prototype.getNameProperty = function () { return Organization.ContactRow.nameProperty; };
            ContactDialog.prototype.getService = function () { return Organization.ContactService.baseUrl; };
            return ContactDialog;
        }(Serenity.EntityDialog));
        ContactDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ContactDialog);
        Organization.ContactDialog = ContactDialog;
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
var FruitCorrect;
(function (FruitCorrect) {
    var Organization;
    (function (Organization) {
        var ContactGrid = (function (_super) {
            __extends(ContactGrid, _super);
            function ContactGrid(container) {
                return _super.call(this, container) || this;
            }
            ContactGrid.prototype.getColumnsKey = function () { return 'Organization.Contact'; };
            ContactGrid.prototype.getDialogType = function () { return Organization.ContactDialog; };
            ContactGrid.prototype.getIdProperty = function () { return Organization.ContactRow.idProperty; };
            ContactGrid.prototype.getLocalTextPrefix = function () { return Organization.ContactRow.localTextPrefix; };
            ContactGrid.prototype.getService = function () { return Organization.ContactService.baseUrl; };
            return ContactGrid;
        }(Serenity.EntityGrid));
        ContactGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ContactGrid);
        Organization.ContactGrid = ContactGrid;
    })(Organization = FruitCorrect.Organization || (FruitCorrect.Organization = {}));
})(FruitCorrect || (FruitCorrect = {}));
//# sourceMappingURL=FruitCorrect.Web.js.map