namespace FruitCorrect.Northwind {
    export interface CustomerDetailsRow {
        Id?: number;
        Email?: string;
        BulstatEIK?: string;
        DdsNumber?: string;
        BankAccount?: string;
        SendBulletin?: boolean;
    }

    export namespace CustomerDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Email';
        export const localTextPrefix = 'Northwind.CustomerDetails';

        export namespace Fields {
            export declare const Id: string;
            export declare const Email: string;
            export declare const BulstatEIK: string;
            export declare const DdsNumber: string;
            export declare const BankAccount: string;
            export declare const SendBulletin: string;
        }

        ['Id', 'Email', 'BulstatEIK', 'DdsNumber', 'BankAccount', 'SendBulletin'].forEach(x => (<any>Fields)[x] = x);
    }
}
