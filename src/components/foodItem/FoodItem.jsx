import React, { useContext, useState } from 'react';
import './fooditem.css';
import { assets } from '../../assets/assets';
import { Foodcontext } from '../../context/Foodcontext';

const FoodItem = () => {
    const {categorey, food_list,cartItems,setCartItems,addToCart,removeFromCart } = useContext(Foodcontext);
   

    
    const filteredFoodList = categorey === 'All'
    ? food_list
    : food_list.filter(item => item.category == categorey);
    return (
        <>{console.log('dad0',filteredFoodList)} 
            {filteredFoodList.map((item, index) => (
               
            
                    <div className='food-item' key={index}>
                    <div className="food-item-image-container">
                        <img className='food-item-img' src={item.image} alt={item.name} />

                        {cartItems[index] > 0 ? (
                            <div className='food-item-counter'>
                                
                             
                                <img
                                    onClick={() =>removeFromCart(index)}
                                    src={assets.remove_icon_red}
                                    alt="Remove"
                                />
                                   <p>{cartItems[index]}</p>
                                <img
                                    onClick={() =>  addToCart(index)}
                                    src={assets.add_icon_green}
                                    alt="Add"
                                />
                            </div>
                        ) : (
                            <img
                                src={assets.add_icon_white}
                                className='add'
                                alt="Add Icon"
                                onClick={() => addToCart(index)}
                            />
                        )}
                    </div>
                    <div className="food-item-info">
                        <div className="food-item-name-rating">
                            <p>{item.name}</p>
                            <img src={assets.rating_starts} alt="Rating" />
                        </div>
                        <p className="food-item-description">{item.description}</p>
                        <p className="food-item-price">${item.price}</p>
                    </div>
                </div>
                
                
            ))}
        </>
    );
};

export default FoodItem;
