class ProductManager{
    constructor (){
        this.products=[];
    }

    getProducts(){
        return this.products
    }

    getProductByID(id){
        let product = this.products.find(prod=> prod.id ==id)
        if (product){
            return product
        }
        return "Not found"
    }

    addProduct(product){
        if (this.products.find (prod=> prod.code == product.code)){
            return "Existe un producto con este código"
        }  

        if (product.code != "" || product.stock >=0) {
            this.products.push(product)
        } else{
            return "No hay stock del producto seleccionado"
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }

    static incrementarID(){
        if(this.idIncrement){
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1= new Product("Arroz", "Dos Hermanos", 400,"","123",20)
const product2= new Product("Arroz", "Gallo", 600,"","456",20)

const productManager = new ProductManager()



productManager.addProduct(product1)
productManager.addProduct(product2)


console.log (productManager.getProducts())
console.log (productManager.getProductById(2))