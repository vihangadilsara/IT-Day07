
const products = [
    {name: "apples", instock: true},
    {name: "oranges", instock: false},
    {name: "bananas", instock: true},
    {name: "pears", instock: false}
];

let instockItems = products.filter(
    function (product){
        return productFilter(product)
    }
)

function productFilter(product){
    return product.instock === true
}

console.log(instockItems);