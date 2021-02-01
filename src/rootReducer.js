function rootReducer(state, action) {
  if (action.type === "add") {
    if (state.cart[action.id] !== undefined) {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: {
            ...state.cart[action.id],
            itemCount: state.cart[action.id].itemCount + 1,
          },
        },
      };
    }
    return {
      ...state, 
      cart: {
        ...state.cart,
        [action.id]: {
          name: state.products[action.id].name,
          price: state.products[action.id].price,
          itemCount: 1,
        }
      }
    }
  }
  if (action.type === "remove") {
    // TODO: if item count is 1, remove from cart and if not in cart, ignore
    // else subtract 1 from item count
    // loop object and keep only that which doesn't match action.id
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.id]: {
          ...state.cart[action.id],
          itemCount: state.cart[action.id].itemCount - 1,
        },
      },
    };
  }

  return;
}

export default rootReducer;
