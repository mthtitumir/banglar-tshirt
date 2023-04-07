import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'


export const RingContext = createContext('gold');
export const MoneyContext = createContext('000000000')
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
context api
1, create context and pass a value
2. create provider and pass value
3. use useContext to receive
*/