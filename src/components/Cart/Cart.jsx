import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemove }) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add some product.</p>
    }
    else{
        message= <div>
            <h3>Thanks for wasting ur money</h3>
        </div>
    }
    return (
        <div>
            <h1 className={cart.length ===1 ? 'blue': 'red'}>order summary cart: {cart.length}</h1>
            <p className={cart.length === 3 ? 'yellow': 'red'}>Something</p>
            {
                cart.length>2
                ? <span className='purple'>aro kino</span> 
                : <span className='red'>fokir</span>
            };
            {message};
            {
                cart.map(tshirt => <p

                    key={tshirt.wannta}
                >
                    {tshirt.name} <button onClick={()=>handleRemove(tshirt._id)}>x</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonus</p>
            }
            {
                cart.length === 3 || <h2>3 ta to hoilo na</h2>
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional rendering
 * ternary
 * logical &&: (if the condition is true, then the next code block will be executed)
 * logical || (if the condition is false then the next thing will displayed)
 */

/**
 * conditonal css style
 * 1. use ternary
 * 2. ternary inside template string
 */

 