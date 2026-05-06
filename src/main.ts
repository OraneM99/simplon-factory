import { Clothing } from "./model/Clothing.js";
import { Customer } from "./model/Customer.js";
import { Order } from "./model/Order.js";
import { Shoes } from "./model/Shoes.js";

const customer1 = new Customer(1, "Alice", 'alice@gmail.com');
const customer2 = new Customer(2, "Michel", "michel.barjo@gmail.com");

const hoodie = new Clothing(1, "Hoodie Nike", 2, 80);
const pantalon = new Clothing(2, "Pantalon Lacoste", 3, 120);
const airMax = new Shoes(1, "Air Max 95", 1, 50);
const mocassins = new Shoes(2, "Mocassins", 2, 30);

const order1 = new Order(125, customer1, [hoodie], new Date("2026-04-01"));
const order2 = new Order(156, customer2, [pantalon, mocassins], new Date("2026-05-06"));


order1.addProduct(airMax);
console.log(order1);
