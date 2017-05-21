namespace FruitCorrect.Northwind {

    @Serenity.Decorators.registerEditor()
    export class CategoryEditor extends Serenity.LookupEditorBase<CategoryRow, any> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return CategoryRow.lookupKey;
        }

        protected getItemText(item: CategoryRow, lookup: Q.Lookup<CategoryRow>) {
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
        }
    }
}