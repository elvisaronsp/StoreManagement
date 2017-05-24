namespace FruitCorrect.Northwind {
    export interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeCountry?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }

    export namespace EmployeeTerritoryRow {
        export const idProperty = 'EmployeeID';
        export const nameProperty = 'TerritoryID';
        export const localTextPrefix = 'Northwind.EmployeeTerritory';

        export namespace Fields {
            export declare const EmployeeID: string;
            export declare const TerritoryID: string;
            export declare const EmployeeLastName: string;
            export declare const EmployeeFirstName: string;
            export declare const EmployeeBirthDate: string;
            export declare const EmployeeHireDate: string;
            export declare const EmployeeAddress: string;
            export declare const EmployeeCity: string;
            export declare const EmployeeCountry: string;
            export declare const EmployeePhoto: string;
            export declare const EmployeeNotes: string;
            export declare const EmployeePhotoPath: string;
            export declare const TerritoryTerritoryDescription: string;
            export declare const TerritoryRegionID: string;
        }

        ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeCountry', 'EmployeePhoto', 'EmployeeNotes', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(x => (<any>Fields)[x] = x);
    }
}
