const fs = require('fs');
const path = require('path');

class Product {
    constructor() {
        this.products = [];
        this.filePath = path.join(__dirname, 'products.json');
        this.loadProducts();
    }

    loadProducts() {
        try {
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                this.products = JSON.parse(data);
            }
        } catch (error) {
            console.log("Error al cargar productos:", error.message);
            this.products = [];
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
        } catch (error) {
            console.log("Error al guardar productos:", error.message);
        }
    }

    addProduct(product) {
        if (!product.name || !product.description || !product.price || !product.stock) {
            console.log("Error: Todos los campos son obligatorios");
            return;
        }
        
        const id = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
        const newProduct = {
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        };
        
        this.products.push(newProduct);
        this.saveProducts();
        console.log("Producto agregado:", newProduct);
        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not found");
            return null;
        }
    }

    deleteProductById(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            this.saveProducts();
            console.log("Producto eliminado:", deletedProduct);
            return deletedProduct;
        } else {
            console.log("Not found");
            return null;
        }
    }

    updateProductById(id, productData) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            // Validar que todos los campos estén presentes
            if (!productData.name || !productData.description || !productData.price || !productData.stock) {
                console.log("Error: Todos los campos son obligatorios para actualizar");
                return {};
            }

            const updatedProduct = {
                ...this.products[index],
                name: productData.name,
                description: productData.description,
                price: productData.price,
                stock: productData.stock
            };

            this.products[index] = updatedProduct;
            this.saveProducts();
            console.log("Producto actualizado:", updatedProduct);
            return updatedProduct;
        } else {
            console.log("Not found");
            return {};
        }
    }
}

module.exports = Product;