import { ActionTypes } from '../constants/action-types'

const initialState = {
    numberCart: 0,
    Carts: []

}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            // cart is empty no need to check directly add item in cart with quantity by 1
            // cart is not empty now check item in cart if item same increase quanity by 1
            // cart is not empty now check item in the cart if not same add item with quanity 1

            if (state.numberCart === 0) {
                let item = {
                    ...payload,
                    quantity: 1
                }
                state.Carts.push(item)
            } else {
                let check = false;
                state.Carts.map((item, index) => {
                    if (item._id === payload._id) {
                        state.Carts[index].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _item = {
                        ...payload,
                        quanity: 1
                    }
                    state.Carts.push(_item);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            };
            default:
                return state; 

    }

}