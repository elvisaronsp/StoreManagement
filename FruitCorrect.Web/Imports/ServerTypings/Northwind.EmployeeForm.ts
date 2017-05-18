namespace FruitCorrect.Northwind {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Employee';

    }

    export interface EmployeeForm {
    }

    [].forEach(x => Object.defineProperty(EmployeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
