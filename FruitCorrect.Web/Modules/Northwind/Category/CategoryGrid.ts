﻿namespace FruitCorrect.Northwind {

    @Serenity.Decorators.registerClass()
    export class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey() { return "Northwind.Category"; }
        protected getDialogType() { return <any>CategoryDialog; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getService() { return CategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
// ReSharper disable once WrongExpressionStatement
            new Serenity.TreeGridMixin<CategoryRow>({
                grid: this,
                getParentId: x => x.ParentCategoryID,
                toggleField: CategoryRow.Fields.CategoryName,
                initialCollapse: () => false
            });
        }
        
        protected subDialogDataChange() {
            super.subDialogDataChange();

            Q.reloadLookup(CategoryRow.lookupKey);
        }

        protected usePager() {
            return false;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(Q.indexOf(columns, x => x.name == CategoryRow.Fields.CategoryName) + 1, 0, {
                field: 'Add Child Unit',
                name: '',
                format: ctx => '<a class="inline-action add-child-unit" title="add child unit"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('add-child-unit')) {
                    var dlg = new CategoryDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog({
                        ParentUnitId: item.CategoryID
                    });
                }
            }
        }
    }
}