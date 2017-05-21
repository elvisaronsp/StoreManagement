namespace FruitCorrect.Northwind {
    export interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        ParentCategoryID?: number;
        Picture?: number[];
        ParentCategoryName?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryID';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Northwind.Category';
        export const lookupKey = 'Northwind.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Northwind.Category');
        }

        export namespace Fields {
            export declare const CategoryID: string;
            export declare const CategoryName: string;
            export declare const Description: string;
            export declare const ParentCategoryID: string;
            export declare const Picture: string;
            export declare const ParentCategoryName: string;
        }

        ['CategoryID', 'CategoryName', 'Description', 'ParentCategoryID', 'Picture', 'ParentCategoryName'].forEach(x => (<any>Fields)[x] = x);
    }
}
