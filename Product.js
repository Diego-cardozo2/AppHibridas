class Product{
    products=[];

    constructor(products=[]){
        this.products= products;
    }
    addProduct(product){
        if(product.name=== ""){

        }
        const id = crypto.randomUUID();
        console.log(id);
    }
    getproducts(id){

    }
    getproductsById(id){

    }

}

module.exports = Product;