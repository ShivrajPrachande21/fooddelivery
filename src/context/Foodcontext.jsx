import { useEffect, useState } from 'react';
import { Children } from 'react';
import { createContext } from 'react';
import { food_list } from '../assets/assets';
export const Foodcontext = createContext();

export const FoodcontextProvider = ({ children }) => {
    const [categorey, setCategorey] = useState('All');
    const [cartItems, setCartItems] = useState({});

    const addToCart = itemId => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = itemId => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(product => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };
    useEffect(() => {
        console.log('cardt', cartItems);
    }, [cartItems]);

    return (
        <Foodcontext.Provider
            value={{
                categorey,
                setCategorey,
                food_list,
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart,
                getTotalCartAmount
            }}
        >
            {children}
        </Foodcontext.Provider>
    );
};
