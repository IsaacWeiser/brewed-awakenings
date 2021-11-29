import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

// click and return product name and price
document.addEventListener("click", (event) => {
    //capture the id of what was clicked
    if (event.target.id.startsWith("product--")) {
       
    const [,prodId] = event.target.id.split("--");

//cycle through the array of objects
for (const product of products) {
  
    //find the object that has a matching id
    if (product.id === parseInt(prodId)){
        // alert the windiw with the correct info
        window.alert(`
        ${product.name} costs
        ${product.price.toFixed(2)}
        `)
    }
}
    }
})