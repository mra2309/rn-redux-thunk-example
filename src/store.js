/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import cardUser from './reducers/cardUser';

const store = configureStore({
  reducer: {
    user: cardUser,
    cart: cartSlice,
  },
});

console.log('STATE_AWAL :' + store.getState());

store.subscribe(() => {
  console.log('perubahan pada store : ' + store.getState());
});

export default store;
