import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
let findProduct = (order, allProducts) => {
    let orderProduct = ""

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null
let i =0;
    for (const employee of allEmployees) {
        console.log(`loop ${i}: `);
        console.log(employee.id);
        console.log(order.employeeId);
        i++;
        if (employee.id === order.employeeId) {
            if (employee !== null) {
            orderEmployee = employee
            console.log("orderemp");
            console.log(orderEmployee);
            }
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order,products)
        console.log("empLoop" + employee);
       if (employee !== null) {
        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
       }
    }

    html += "</ul>"

    return html
}

