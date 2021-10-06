export class Product {
    productCode : string;
    productDesc : string;
    unitPrice : number;
    quantity : number;
    category: string;

    constructor(productCode :string,productDesc :string,unitPrice : number,quantity :number,category :string){
        this.productCode = productCode;
        this.productDesc = productDesc;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.category = category;

    }

}   
