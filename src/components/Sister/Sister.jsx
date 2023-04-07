import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h1>sister</h1>
            <h3>Grandpa : {money}</h3>
        </div>
    );
};

export default Sister;