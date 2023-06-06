class ProductManager{
    constructor (){
        this.products=[];
    }

getProducts = ()=> this.products;

addProduct = (title, description, price, thumbnail, code, stock) => {
    const newProduct ={
        title,
        description, 
        price, 
        thumbnail, 
        code, 
        stock,
        products: []
    }

//asignación de ID, si el array está vacío, ID=1 sino va incrementando
if (this.products.length===0){
    newProduct.id = 1
} else{
    newProduct.id=this.products[this.products.length-1].id + 1
}

//pusheo el nuevo producto
this.products.push(newProduct)
}

//identifo el producto por el ID usando metodo getProductbyID

getProductById= (idProducto) =>{
    const indiceProducto = this.products.findIndex(newProduct => newProduct.id === idProducto );

    if (indiceProducto === -1){
        console.log ("Not Found");
        return;
    }

    const agregarProducto= this.products [indiceProducto].products.includes (idProducto);

    if(agregarProducto){
        console.log ("El producto se agregó correctamente");
        return;
    }
    
    this.products[indiceProducto].products.push(idProducto)
}
};


const administrarProductos = new ProductManager ();
administrarProductos.addProduct ('Lámpara', 'negra', 8000, 'sin imágen', 'PQS2154', 36 );
administrarProductos.addProduct ('Sillón', 'gris', 30000, 'sin imágen', 'ZQW1155', 14 );
administrarProductos.addProduct ('Mesa', 'marrón', 20000, 'sin imágen', 'QWM0025', 12 );

administrarProductos.getProductById(1);
administrarProductos.getProductById(2);
administrarProductos.getProductById(3);


console.log(administrarProductos.getProducts());