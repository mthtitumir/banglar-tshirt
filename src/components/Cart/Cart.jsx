import React from 'react';

const Cart = ({ cart, handleRemove }) => {
    return (
        <div>
            <h1>order summary cart: {cart.length}</h1>
            {
                cart.map(tshirt => <p

                    key={tshirt.wannta}
                >
                    {tshirt.name} <button onClick={()=>handleRemove(tshirt._id)}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;