import { toast } from "react-toastify";
import {
  deleteServerTransaction,
  getallTransaction,
  insertTransaction,
} from "../helpers/axiosHelper";
import { setTransactions } from "./transactionSlice";

//Fetching transaction
export const fetchTransactionAction = () => async (dispatch) => {
  const { status, result } = await getallTransaction();
  if (status === "success") {
    result.length && dispatch(setTransactions(result));
  }
};

//Adding transaction
export const addTransactionAction = (form) => async (dispatch) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  const userID = user._id;
  const { status, message } = await insertTransaction({ ...form, userID });
  toast[status](message);
  status === "success" && dispatch(fetchTransactionAction());
};

//Deleteing transaction
export const deleteTransactionAction = (_id) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delete?")) {
    return;
  }
  const { status, message } = await deleteServerTransaction(_id);
  toast[status](message);
  status === "success" && dispatch(fetchTransactionAction());
};
