namespace FruitCorrect.Northwind {
    export interface ScalesRow {
        ScaleId?: number;
        Name?: string;
        Url?: string;
        PortName?: string;
    }

    export namespace ScalesRow {
        export const idProperty = 'ScaleId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.Scales';

        export namespace Fields {
            export declare const ScaleId: string;
            export declare const Name: string;
            export declare const Url: string;
            export declare const PortName: string;
        }

        ['ScaleId', 'Name', 'Url', 'PortName'].forEach(x => (<any>Fields)[x] = x);
    }
}
