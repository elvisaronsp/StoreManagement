namespace FruitCorrect.Northwind {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Employee';

    }

    export interface EmployeeForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }

    [['FirstName', () => Serenity.StringEditor], ['LastName', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['BirthDate', () => Serenity.DateEditor], ['HireDate', () => Serenity.DateEditor], ['Address', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Country', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmployeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
