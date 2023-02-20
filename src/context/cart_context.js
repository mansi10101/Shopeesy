import { createContext, useReducer, useContext } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //add item to cart
  const addToCart = (quantity, item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { quantity, item } });
  };

  //increase decrease quantity

  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREMENT', payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREMENT', payload: id });
  };

  //remove item from cart
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, setDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
