import {createStore} from "redux";
import {usersSlice} from "../userSlice/usersSlice";
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: usersSlice
});
const unsubscribe = store.subscribe(()=>{
    console.log("store changed", store.getState());
})

export default store;
