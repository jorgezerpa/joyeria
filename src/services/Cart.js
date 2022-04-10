class Cart{
    constructor(){
    }
    

    addToCart(name, price, quantity){
        if(JSON.parse(localStorage.getItem('gemesaCart'))===null){
            localStorage.setItem('gemesaCart', JSON.stringify([]));
        } 
        const currentCart = JSON.parse(localStorage.getItem('gemesaCart'));
        const newCart =  [...currentCart, {name, price, quantity}]  
        
        window.localStorage.setItem('gemesaCart', JSON.stringify(newCart));   
        
        console.log(JSON.parse(localStorage.getItem('gemesaCart')))
    };
    
    removeFromCart(product){
        const cart = JSON.parse(localStorage.getItem('gemesaCart'));
        
        cart.forEach((item, index)=>{
            if(item.name===product){
                cart.splice(index, 1)
            }
            
        window.localStorage.setItem('gemesaCart', JSON.stringify(cart));
        })
    
        console.log(JSON.parse(localStorage.getItem('gemesaCart')))
    };

    updateQuantity(name, operation){
        const cart = JSON.parse(localStorage.getItem('gemesaCart'));

        // products.findIndex(item=> item.id === id);
        const index = cart.findIndex(item=> item.name === name);
        console.log(index)

        if(operation === 'sum') cart[index].quantity = cart[index].quantity+1 ; 
        if(operation === 'less') cart[index].quantity = cart[index].quantity-1 ; 

        window.localStorage.setItem('gemesaCart', JSON.stringify(cart));  
         
        console.log(JSON.parse(localStorage.getItem('gemesaCart')))  
    };


    deleteItem(){};
    clearCart(){}
}

export default Cart;