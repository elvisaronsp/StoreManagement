namespace FruitCorrect.Northwind {

    @Serenity.Decorators.registerClass()
    export class ScalesGrid extends Serenity.EntityGrid<ScalesRow, any> {
        protected getColumnsKey() { return "Northwind.Scales"; }
        protected getDialogType() { return <any>ScalesDialog; }
        protected getIdProperty() { return ScalesRow.idProperty; }
        protected getLocalTextPrefix() { return ScalesRow.localTextPrefix; }
        protected getService() { return ScalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}