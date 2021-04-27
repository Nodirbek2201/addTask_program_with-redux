import {combineReducers} from 'redux'
import {chiqimReducer} from "./Reducers/chiqimReducer";
import {kirimReducer} from "./Reducers/kirimReducer";
import {kassaReducer} from "./Reducers/kassaReducer";
import {foydalanuvchiReducer} from "./Reducers/foydalanuvchiReducer";

export default combineReducers({
    kirimReducer,
    chiqimReducer,
    foydalanuvchiReducer,
    kassaReducer
})