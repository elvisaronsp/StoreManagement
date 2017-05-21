namespace FruitCorrect.Northwind {
    export interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        Email?: string;
        SendBulletin?: boolean;
        BulstatEIK?: string;
        DdsNumber?: string;
        BankAccount?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Northwind.Customer';
        export const lookupKey = 'Northwind.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Northwind.Customer');
        }

        export namespace Fields {
            export declare const ID: string;
            export declare const CustomerID: string;
            export declare const CompanyName: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Region: string;
            export declare const PostalCode: string;
            export declare const Country: string;
            export declare const Phone: string;
            export declare const Fax: string;
            export declare const NoteList: string;
            export declare const Representatives: string;
            export declare const Email: string;
            export declare const SendBulletin: string;
            export declare const BulstatEIK: string;
            export declare const DdsNumber: string;
            export declare const BankAccount: string;
        }

        ['ID', 'CustomerID', 'CompanyName', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives', 'Email', 'SendBulletin', 'BulstatEIK', 'DdsNumber', 'BankAccount'].forEach(x => (<any>Fields)[x] = x);
    }
}
