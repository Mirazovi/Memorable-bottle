const getStorageCart = () =>{
    const StorageItem = localStorage.getItem('cart');
    if(StorageItem){
        return JSON.parse(StorageItem);
    }
    return [];
}
const SaveCartLs = (cart) =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}
const AddToLS = (id) =>{
    const Cart = getStorageCart();
    Cart.push(id);
    SaveCartLs(Cart);
}
const RemoveToLs = (id) =>{
    const cart = getStorageCart();
    const remaining = cart.filter(idx => idx !== id);
    SaveCartLs(remaining)
}
export{AddToLS , getStorageCart,RemoveToLs}