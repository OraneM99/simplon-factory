import { Clothing } from "./model/Clothing.js";
import { Customer } from "./model/Customer.js";
import { Order } from "./model/Order.js";
import { Shoes } from "./model/Shoes.js";

const customer1 = new Customer(1, "Alice", 'alice@gmail.com');
const customer2 = new Customer(2, "Michel", "michel.barjo@gmail.com");

const hoodie = new Clothing(1, "Hoodie Nike", 2, 80);
const pantalon = new Clothing(2, "Pantalon Lacoste", 3, 120);
const airMax = new Shoes(3, "Air Max 95", 1, 50);
const mocassins = new Shoes(4, "Mocassins", 2, 30);

const order1 = new Order(125, customer1, [hoodie], new Date("2026-04-01"));
const order2 = new Order(156, customer2, [pantalon, mocassins], new Date("2026-05-06"));

console.log(" === Ajouter un produit à la commande ===");
console.log(order1);
console.log(" === ");
order1.addProduct(airMax);

console.log(" === Supprimer un produit de la commande ===");
const newOrderList = order2.removeProduct(2);
console.log(newOrderList);

console.log(" === Calculer le poids total de la commmande ===");
const calculWeight = order1.calculateWeight();
console.log(calculWeight);

console.log(" === Calculer le prix total de la commmande ===");
const totalOrder = order1.calculateTotal();
console.log(totalOrder);

console.log("=== Afficher les détails de la commande ===");
console.log(order1.displayOrder(), );




