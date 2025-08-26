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

console.log("\n4. Actualizando producto con ID 1:");
const updatedProduct = productManager.updateProductById(1, {
    name: 'Teclado Gaming',
    description: 'Teclado Mecánico RGB Gaming',
    price: 30000,
    stock: 20
});
console.log("Producto actualizado:", updatedProduct);

console.log("\n5. Productos después de la actualización:");
console.log(productManager.getProducts());

console.log("\n6. Eliminando producto con ID 2:");
const deletedProduct = productManager.deleteProductById(2);
console.log("Producto eliminado:", deletedProduct);

console.log("\n7. Productos después de la eliminación:");
console.log(productManager.getProducts());

console.log("\n8. Intentando eliminar producto inexistente:");
productManager.deleteProductById(99);

console.log("\n9. Intentando actualizar producto inexistente:");
const updateResult = productManager.updateProductById(99, {
    name: 'Producto Inexistente',
    description: 'No existe',
    price: 1000,
    stock: 1
});
console.log("Resultado de actualización:", updateResult);

console.log("\n10. Estado final de productos:");
console.log(productManager.getProducts());
