class Cart{
    constructor(){
    }

    
    getItemQuantity(name){
        let currentCart = JSON.parse(localStorage.getItem('gemesaCart'));        
        // let item = currentCart.length<0 ? currentCart.filter(item=>item=== name)[0].quantity : 0;
        let item = currentCart.findIndex(item=>item.name===name);
        return currentCart[item].quantity;
    }


    addToCart(name, price, quantity){
                //create if not exist
        if(JSON.parse(localStorage.getItem('gemesaCart'))===null){
            localStorage.setItem('gemesaCart', JSON.stringify([]));
        } 

        const currentCart = JSON.parse(localStorage.getItem('gemesaCart'));
                
        //not repeat products
        const repeatedItem = currentCart.find((item)=> item.name===name);
        if(!repeatedItem){
            const newCart =  [...currentCart, {name, price, quantity}]  
            window.localStorage.setItem('gemesaCart', JSON.stringify(newCart));   
            console.log(JSON.parse(localStorage.getItem('gemesaCart')))
            return false;
        }        
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

    updateQuantity(name, price, quantity, operation, showQuantity){
        let cart = [];
        if(JSON.parse(localStorage.getItem('gemesaCart')) !== null) cart = JSON.parse(localStorage.getItem('gemesaCart'))
        

        const index = cart.findIndex(item=> item.name === name);

        switch (index) {
            case -1:
                if(operation === 'sum'){
                    this.addToCart(name, price, quantity);
                    showQuantity(1);
                } 
                if(operation === 'less'){
                    return false;
                    // showQuantity(cart[index].quantity);
                }
                return false  //when actualize, the condition the get into default becomes true, so the element is eliminated again 
                break;
            default:
                    if(operation === 'sum'){
                        cart[index].quantity = cart[index].quantity+1 ; 
                        showQuantity(cart[index].quantity);
                    }
                    if(operation === 'less'){
                        cart[index].quantity = cart[index].quantity-1; 
                        showQuantity(cart[index].quantity);
                    } 
                    if(operation === 'less' && cart[index].quantity===0){
                        cart.splice(index, 1); 
                        showQuantity(0);
                    } 
                break;
            }
            

        window.localStorage.setItem('gemesaCart', JSON.stringify(cart));  
         
        console.log(JSON.parse(localStorage.getItem('gemesaCart')))  
    };
 
    clearCart(){
        localStorage.clear();
    }
}

export default Cart;