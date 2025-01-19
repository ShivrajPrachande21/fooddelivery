import React, { useContext } from 'react';
import './placeorder.css';
import { Foodcontext } from '../../context/Foodcontext';
function PlaceOrder() {
    const { getTotalCartAmount } = useContext(Foodcontext);
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone " />
            </div>
            <div className="place-order-right">
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
                        Proceed To Payment
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PlaceOrder;
