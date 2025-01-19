import React, { useContext } from 'react';
import './fooditem.css';
import { assets } from '../../assets/assets';
import { Foodcontext } from '../../context/Foodcontext';

const FoodItem = () => {
    const {
        categorey,
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    } = useContext(Foodcontext);

    const filteredFoodList =
        categorey === 'All'
            ? food_list
            : food_list.filter(item => item.category === categorey);

    return (
        <>
            {filteredFoodList.map(item => (
                <div className="food-item" key={item._id}>
                    <div className="food-item-image-container">
                        <img
                            className="food-item-img"
                            src={item.image}
                            alt={item.name}
                        />

                        {cartItems[item._id] > 0 ? (
                            <div className="food-item-counter">
                                <img
                                    onClick={() => removeFromCart(item._id)}
                                    src={assets.remove_icon_red}
                                    alt="Remove"
                                />
                                <p>{cartItems[item._id]}</p>
                                <img
                                    onClick={() => addToCart(item._id)}
                                    src={assets.add_icon_green}
                                    alt="Add"
                                />
                            </div>
                        ) : (
                            <img
                                src={assets.add_icon_white}
                                className="add"
                                alt="Add Icon"
                                onClick={() => addToCart(item._id)}
                            />
                        )}
                    </div>
                    <div className="food-item-info">
                        <div className="food-item-name-rating">
                            <p>{item.name}</p>
                            <img src={assets.rating_starts} alt="Rating" />
                        </div>
                        <p className="food-item-description">
                            {item.description}
                        </p>
                        <p className="food-item-price">${item.price}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FoodItem;
