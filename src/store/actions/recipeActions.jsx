import { toast } from "react-toastify";
import { addrecipe } from "../reducers/counterSlice";

export const asyncgetrecipe = () => (dispatch,getState) => {
    try {
        let data = JSON.parse(localStorage.getItem("recipe")) || [];
        dispatch(addrecipe(data))
    } catch (error) {
        toast.error(error)
    }
}