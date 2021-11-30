import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders();

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//add a click listener that lists how many products that employee sold
document.addEventListener("click", (event)=> {

    //identify what is being clicked and make sure that we are clicking employees
    if (event.target.id.startsWith("employee--") ) {

        // now that we have specified the areas of click
        //got through the employee data and show the  amount of products sold by the employee
        
        //this line splits the id into two parts, the word employee and the id of db item
        // we are capturing the second index aka [1] in this variable 
        let [,empId] = event.target.id.split("--");
let count =0;
console.log()
        for (const order of orders) {
            //match the employees to the orders and count products sold
            if (parseInt(empId) === order.employeeId) {
            console.log("test")
            count++;
            console.log(count)
            }
        }
let empName;
        for (const employee of employees) {
            if (parseInt(empId)=== employee.id)
            {
                empName=employee.name;
            }  
        }
        window.alert(`
        ${empName} has sold:
        ${count} products`)
    }
})
