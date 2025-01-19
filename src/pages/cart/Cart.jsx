import React, { useContext } from 'react';
import './cart.css';
import { Foodcontext } from '../../context/Foodcontext';
import FoodItem from './../../components/foodItem/FoodItem';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
        useContext(Foodcontext);
    const navigte = useNavigate();
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list?.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p
                                        onClick={() => removeFromCart(item._id)}
                                        className="cross"
                                    >
                                        X
                                    </p>
                                </div>
                                <hr />
                            </>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Deliver Fee</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>
                                {getTotalCartAmount() === 0
                                    ? 0
                                    : getTotalCartAmount() + 2}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => navigte('/order')}>
                        Proceed To CheckOut
                    </button>
                </div>
                <div className="cart-promocode">
                    <p>If you a promo code,Eter here</p>
                    <div className="cart-promocode-input">
                        <input
                            type="text"
                            placeholder="Promocode"
                            name=""
                            id=""
                        />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
