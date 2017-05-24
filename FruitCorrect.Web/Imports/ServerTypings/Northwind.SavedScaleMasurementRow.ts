namespace FruitCorrect.Northwind {
    export interface SavedScaleMasurementRow {
        ScaleMasurementId?: number;
        ScaleId?: number;
        OrderId?: number;
        ProductId?: number;
        UserId?: number;
        InsertedDate?: string;
        PhisicalQuantity?: number;
        ScaleName?: string;
        OrderCustomerId?: string;
        OrderEmployeeId?: number;
        OrderOrderDate?: string;
        OrderRequiredDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderFreight?: number;
        OrderShipName?: string;
        OrderShipAddress?: string;
        OrderShipCity?: string;
        OrderShipRegion?: string;
        OrderShipPostalCode?: string;
        OrderShipCountry?: string;
        ProductProductName?: string;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductExpirationDate?: string;
    }

    export namespace SavedScaleMasurementRow {
        export const idProperty = 'ScaleMasurementId';
        export const localTextPrefix = 'Northwind.SavedScaleMasurement';

        export namespace Fields {
            export declare const ScaleMasurementId: string;
            export declare const ScaleId: string;
            export declare const OrderId: string;
            export declare const ProductId: string;
            export declare const UserId: string;
            export declare const InsertedDate: string;
            export declare const PhisicalQuantity: string;
            export declare const ScaleName: string;
            export declare const OrderCustomerId: string;
            export declare const OrderEmployeeId: string;
            export declare const OrderOrderDate: string;
            export declare const OrderRequiredDate: string;
            export declare const OrderShippedDate: string;
            export declare const OrderShipVia: string;
            export declare const OrderFreight: string;
            export declare const OrderShipName: string;
            export declare const OrderShipAddress: string;
            export declare const OrderShipCity: string;
            export declare const OrderShipRegion: string;
            export declare const OrderShipPostalCode: string;
            export declare const OrderShipCountry: string;
            export declare const ProductProductName: string;
            export declare const ProductSupplierId: string;
            export declare const ProductCategoryId: string;
            export declare const ProductQuantityPerUnit: string;
            export declare const ProductUnitPrice: string;
            export declare const ProductUnitsInStock: string;
            export declare const ProductUnitsOnOrder: string;
            export declare const ProductReorderLevel: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductExpirationDate: string;
        }

        ['ScaleMasurementId', 'ScaleId', 'OrderId', 'ProductId', 'UserId', 'InsertedDate', 'PhisicalQuantity', 'ScaleName', 'OrderCustomerId', 'OrderEmployeeId', 'OrderOrderDate', 'OrderRequiredDate', 'OrderShippedDate', 'OrderShipVia', 'OrderFreight', 'OrderShipName', 'OrderShipAddress', 'OrderShipCity', 'OrderShipRegion', 'OrderShipPostalCode', 'OrderShipCountry', 'ProductProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductExpirationDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
