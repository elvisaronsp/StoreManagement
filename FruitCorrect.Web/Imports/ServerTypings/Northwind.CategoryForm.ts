namespace FruitCorrect.Northwind {
    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Category';

    }

    export interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentCategoryId: CategoryEditor;
    }

    [['CategoryName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['ParentCategoryId', () => CategoryEditor]].forEach(x => Object.defineProperty(CategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
