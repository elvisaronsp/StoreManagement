namespace FruitCorrect.Northwind {
    export interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Country?: string;
        Photo?: number[];
        Notes?: string;
        PhotoPath?: string;
        Gender?: Gender;
    }

    export namespace EmployeeRow {
        export const idProperty = 'EmployeeID';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Northwind.Employee';
        export const lookupKey = 'Northwind.Employee';

        export function getLookup(): Q.Lookup<EmployeeRow> {
            return Q.getLookup<EmployeeRow>('Northwind.Employee');
        }

        export namespace Fields {
            export declare const EmployeeID: string;
            export declare const LastName: string;
            export declare const FirstName: string;
            export declare const FullName: string;
            export declare const BirthDate: string;
            export declare const HireDate: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Country: string;
            export declare const Photo: string;
            export declare const Notes: string;
            export declare const PhotoPath: string;
            export declare const Gender: string;
        }

        ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'BirthDate', 'HireDate', 'Address', 'City', 'Country', 'Photo', 'Notes', 'PhotoPath', 'Gender'].forEach(x => (<any>Fields)[x] = x);
    }
}
