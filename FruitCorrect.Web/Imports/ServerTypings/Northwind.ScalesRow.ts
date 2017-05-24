namespace FruitCorrect.Northwind {
    export interface ScalesRow {
        ScaleId?: number;
        Name?: string;
    }

    export namespace ScalesRow {
        export const idProperty = 'ScaleId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.Scales';

        export namespace Fields {
            export declare const ScaleId: string;
            export declare const Name: string;
        }

        ['ScaleId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}
