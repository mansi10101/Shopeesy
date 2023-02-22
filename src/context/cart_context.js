import { createContext, useReducer, useContext,useEffect } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    orders: [],
    curr_orders: [],
    total_item: "",
    total_price: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //add item to cart
  const addToCart = (quantity, item,size) => {
    dispatch({ type: 'ADD_TO_CART', payload: { quantity, item,size } });
  };

  //increase decrease quantity

  const setDecrease = (id,size) => {
    dispatch({ type: 'SET_DECREMENT', payload: {id,size} });
  };

  const setIncrease = (id,size) => {
    dispatch({ type: 'SET_INCREMENT', payload: {id,size}});
  };

  //remove item from cart
  const removeItem = (id,size) => {
    dispatch({ type: 'REMOVE_ITEM', payload: {id,size}});
  };

  const buyItems = (currCartItems) => {
    dispatch({type: "BUY_ITEMS", payload: {currCartItems}})
  }

  useEffect(() => {
    dispatch({type: "TOTAL_ITEM"});
    dispatch({type: "TOTAL_PRICE"});
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, setDecrease, setIncrease,buyItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
