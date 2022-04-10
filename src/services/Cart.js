class Cart{
    constructor(){}


    addToCart(name, value){
        window.localStorage.setItem(name, value);
        console.log(localStorage)
    };
    removeFromCart(){};
    updateQuantity(){};
    deleteItem(){};
    clearCart(){}
}

export default Cart;