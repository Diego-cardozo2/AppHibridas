const Product = require('./Product.js');

const productManager = new Product();

console.log("=== PRUEBA DE MÉTODOS ===");

console.log("\n1. Agregando productos:");
productManager.addProduct({
    name: 'Teclado',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

productManager.addProduct({
    name: 'Mouse',
    description: 'Mouse Inalámbrico',
    price: 15000,
    stock: 30
});

productManager.addProduct({
    name: 'Monitor',
    description: 'Monitor 24 pulgadas',
    price: 45000,
    stock: 15
});

console.log("\n2. Obteniendo todos los productos:");
const allProducts = productManager.getProducts();
console.log(allProducts);

console.log("\n3. Buscando producto por ID:");
const product1 = productManager.getProductById(1);
console.log("Producto con ID 1:", product1);

const product2 = productManager.getProductById(2);
console.log("Producto con ID 2:", product2);

const productNotFound = productManager.getProductById(10);

console.log("\n4. Intentando agregar producto incompleto:");
productManager.addProduct({
    name: 'Producto Incompleto',
    price: 1000
});
