import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //This means keep the items and add payload at the end
      state.items = [...state.items, action.payload]

    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id == action.payload.id);
      //make copy of basket, never modify the basket directly
      let newBasket = [...state.items];

      if (index >= 0) {
        //remove the item from basket
        newBasket.splice(index, 1);

      } else {
        console.warn("can't remove product");
      }

      state.items = newBasket;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

//select to access the basket items, keep in mind its "state.basket" not state.basketSlice
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id == id);

//create helper function for item total
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
  total += item.price, 0)

export default basketSlice.reducer