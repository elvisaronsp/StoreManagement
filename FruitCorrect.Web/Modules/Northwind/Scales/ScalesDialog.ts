namespace FruitCorrect.Northwind {

    @Serenity.Decorators.registerClass()
    export class ScalesDialog extends Serenity.EntityDialog<ScalesRow, any> {
        protected getFormKey() { return ScalesForm.formKey; }
        protected getIdProperty() { return ScalesRow.idProperty; }
        protected getLocalTextPrefix() { return ScalesRow.localTextPrefix; }
        protected getNameProperty() { return ScalesRow.nameProperty; }
        protected getService() { return ScalesService.baseUrl; }

        protected form = new ScalesForm(this.idPrefix);
        
    }
}