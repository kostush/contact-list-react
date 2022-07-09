import {createStore} from "redux";
import {usersSlice} from "../userSlice/usersSlice";

const store = createStore(usersSlice);
const unsubscribe = store.subscribe(()=>{
    console.log("store changed", store.getState());
})

export default store;
