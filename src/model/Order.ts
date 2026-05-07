import { Customer } from "./Customer.js";
import { Product } from "./Product.js";

export class Order {
   
    orderId: number;
    customer: Customer;
    productsList : Product[] = [];
    orderDate: Date;

    constructor(orderId: number, customer: Customer, productsList: Product[], orderDate: Date) {
        this.orderId = orderId;
        this.customer = customer;
        this.productsList = productsList;
        this.orderDate = orderDate;
    }

    addProduct(product: Product) {
        this.productsList = [...this.productsList, product];
        console.log(this.productsList);
        
    }    

    removeProduct(productId : number) {
        this.productsList = this.productsList.filter(product => product.productId != productId );
        return this.productsList;
    }   

    calculateWeight() {
        const totalWeight = this.productsList.reduce((sum, product) => {
            return sum + product.weight
        }, 0);
        return `Poids total de la commande : ${totalWeight} kg.`;
    }

    calculateTotal() {
        const totalOrder = this.productsList.reduce((sum, product) => {
            return sum + product.price
        }, 0);
       return totalOrder;
    }

    displayOrder() {

    const totalOrder = this.calculateTotal();
    
    const productsInfo = this.productsList
        .map(product => `Nom: ${product.name} - Prix: ${product.price} €`)
        .join("\n");
    
    return `Informations du client : 
            
    Nom : ${this.customer.name}
    Email : ${this.customer.email}
            
    Informations du produit :
    ${productsInfo}
            
    Prix total : ${totalOrder} €`;
    }
}