namespace FruitCorrect.Northwind {
    export class ScalesForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Scales';

    }

    export interface ScalesForm {
        Name: Serenity.StringEditor;
        Url: Serenity.StringEditor;
        PortName: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Url', () => Serenity.StringEditor], ['PortName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ScalesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
