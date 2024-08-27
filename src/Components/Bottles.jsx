import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { AddToLS, getStorageCart, RemoveToLs } from "./localStorage";
import Cart from "./Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(()=>{
        if(bottles.length>0){
            const storedCart = getStorageCart();
            const saveCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle);
                }
                
            }
            setCart(saveCart);
        }
    },[bottles])
    const handleClick = (bottle) =>{
        const NewCart = [...cart , bottle];
        setCart(NewCart);
        AddToLS(bottle.id)
    }
    const handleRemoveCart = (id) =>{
        // visual cart remove 
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining);
        // remove from ls 
        RemoveToLs(id)
    }
    return (
        <div>
            <h1 className="text-2xl text-center">Bottles : {bottles.length}</h1>
            <div>
                
                <Cart cart={cart}
                handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
            <div className="w-[90%] m-auto grid grid-cols-4 gap-4 my-4">
                {
                    bottles.map((bottle,idx) => <Bottle 
                    key={idx} 
                    bottle={bottle}
                    handleClick={handleClick}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;