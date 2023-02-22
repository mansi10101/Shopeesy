const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { quantity, item,size } = action.payload;
    // console.log(item)

    //tackling exisiting product
    let exisitingProduct = state.cart.find((curItem) => curItem.id === item.id && curItem.size === size);

    if (exisitingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === item.id  && curElem.size === size ) {
          let newquantity = curElem.quantity + quantity;

          if (newquantity > 10) {
            newquantity = 10;
          }
          return {
            ...curElem,
            quantity: newquantity,
          };
        }
        else{
          return {
            curElem,
          }
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
        size,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // decrese quanitity

  if (action.type === 'SET_DECREMENT') {
    let{id,size} = action.payload;
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === id && curElem.size === size) {
        let decQuantity = curElem.quantity - 1;
        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...curElem,
          quantity: decQuantity,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  //increase quantity

  if (action.type === 'SET_INCREMENT') {
    let{id,size} = action.payload;
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === id && curElem.size === size) {
        let IncQuantity = curElem.quantity + 1;
        if (IncQuantity >= 10) {
          IncQuantity = 10;
        }
        return {
          ...curElem,
          quantity: IncQuantity,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  //remove item
  if (action.type === 'REMOVE_ITEM') {
    let{id,size} = action.payload;
    let updateCart = state.cart.filter(
      (curElem) => curElem.id !== id || curElem.size !== size
    );
    return {
      ...state,
      cart: updateCart,
    };
  }

  //cart total quantity of items
  if(action.type === "TOTAL_ITEM"){
    let total_item = state.cart.reduce((initialVal, curElem) => {
      let {quantity } = curElem;
      initialVal = initialVal + quantity ;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: total_item,
    };
  }


  //cart total amount
  if (action.type === 'TOTAL_PRICE') {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let {price, quantity } = curElem;
      initialVal = initialVal + price * quantity ;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price: total_price,
    };
  }

  // buy items
  if(action.type === "BUY_ITEMS"){
    let {currCartItems} = action.payload;
     let newarr = state.orders.concat(currCartItems)
    return {
      ...state,
      cart: [],
      orders: newarr,
      curr_orders: currCartItems,
    }
  }


  return state;
};

export default cartReducer;
