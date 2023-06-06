import { toast } from "react-toastify";
import { loginUser } from "../helpers/axiosHelper";
import { setUsers } from "./userSlice";

//LoginUser
export const loginUserAction = (obj) => async (dispatch) => {
  const { status, message, user } = await loginUser(obj);
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("user", JSON.stringify(user));
    dispatch(setUsers(user));
  }
};

//LoginUser
export const loginoutUserAction = () => async (dispatch) => {
  dispatch(setUsers({}));
  sessionStorage.removeItem("user");
};
