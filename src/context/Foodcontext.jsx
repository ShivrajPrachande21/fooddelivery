import { useEffect, useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";
export const Foodcontext=createContext()

export const FoodcontextProvider=({children})=>{
    const [categorey,setCategorey]=useState('All');
    const [cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>
    {
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
     
    
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
      useEffect(()=>{
            console.log('cardt',cartItems)
      },[cartItems])

    return(
        <Foodcontext.Provider value={{categorey,setCategorey,  food_list,cartItems,setCartItems,addToCart,removeFromCart}}>
            {children}
        </Foodcontext.Provider>
    )
}