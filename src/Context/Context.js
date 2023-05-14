import React, { useReducer } from 'react';
import { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { useContext } from 'react';
import { reducer } from './Reducer';
const Cart = createContext();           //creating context

const Context = ({ children }) => {
    const product = [...Array(20)].map(() => ({     //we have created faker of 20 undefined elements
           Id: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            // userId: faker.datatype.uuid(),
            // name: faker.commerce.productName(),
            // price: faker.commerce.price(),
            // Image: faker.random.image(),
            // inStock: faker.random.arrayElement([0,3,5,6,7]),
            // fastDelivery: faker.datatype.boolean(),
            // rating: faker.random.arrayElement([1,2,3,4,5]),
        
    }));
    const initialState = {
        product: product,
        Cart: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Cart.Provider value={{state, dispatch}} > {children} </Cart.Provider>
}

const CartState = ()=>{               //this is seems like use globally context
    return useContext(Cart);
}
export default Context;
export  {CartState};
