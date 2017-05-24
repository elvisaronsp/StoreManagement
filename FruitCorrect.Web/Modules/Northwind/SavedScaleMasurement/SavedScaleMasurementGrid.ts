/// <reference types="jqueryui" />

namespace FruitCorrect.Northwind {

    @Serenity.Decorators.registerClass()
    export class SavedScaleMasurementGrid extends Serenity.EntityGrid<SavedScaleMasurementRow, any> {
        protected getColumnsKey() { return "Northwind.SavedScaleMasurement"; }
        protected getIdProperty() { return SavedScaleMasurementRow.idProperty; }
        protected getLocalTextPrefix() { return SavedScaleMasurementRow.localTextPrefix; }
        protected getService() { return SavedScaleMasurementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            this.scaleID = $("#GridDiv").data("scaleid");
            console.log($("#GridDiv").data("scaleid"));
        }

        protected getButtons(): Serenity.ToolButton[] {
        
            var buttons = super.getButtons();
            
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

        private _scaleID: number;

        get scaleID() {
            return this._scaleID;
        }


        set scaleID(value: number) {
            if (this._scaleID !== value) {
                this._scaleID = value;
                this.setEquality('ScaleID', value);
                this.refresh();
            }
        }
    }
}