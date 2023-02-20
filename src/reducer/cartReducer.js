const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { quantity, item } = action.payload;
    // console.log(item)

    //tackling exisiting product
    let exisitingProduct = state.cart.find((curItem) => curItem.id === item.id);

    if (exisitingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === item.id) {
          let newquantity = curElem.quantity + quantity;

          if(newquantity > 10){
            newquantity = 10;
          }
          return {
            ...curElem,
            quantity: newquantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: item.id,
        name: item.name,
        quantity,
        img: item.img,
        price: item.price,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // decrese quanitity

  if(action.type === 'SET_DECREMENT'){
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
            let decQuantity = curElem.quantity - 1;
            if(decQuantity <= 1){
                decQuantity = 1;
            }
            return {
                ...curElem,
                quantity: decQuantity,
            }
        }
        else{
            return curElem;
        }
    })
    return{
        ...state,
        cart: updatedProduct,
    }
  }
  
  //increase quantity

  if(action.type === 'SET_INCREMENT'){
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
            let IncQuantity = curElem.quantity + 1;
            if(IncQuantity >= 10){
                IncQuantity = 10;
            }
            return {
                ...curElem,
                quantity: IncQuantity,
            }
        }
        else{
            return curElem;
        }
    })
    return{
        ...state,
        cart: updatedProduct,
    }
  }


//remove item
  if (action.type === 'REMOVE_ITEM') {
    let updateCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }

  return state;
};

export default cartReducer;
