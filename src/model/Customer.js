export class Customer {
    customerId;
    name;
    email;
    constructor(customerId, name, email) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        return `Customer ID : ${this.customerId}, Name : ${this.name}, Email : ${this.email}`;
    }
}
//# sourceMappingURL=Customer.js.map