import axios from "axios";

const apiEp =
  process.env.NODE_ENV === "production" ? " " : "http://localhost:8000";
const userEp = apiEp + "/api/v1/user";
const transEp = apiEp + "/api/v1/transaction";

//Insert User
export const postUser = async (obj) => {
  try {
    const result = await axios.post(userEp, obj);
    return result.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Login User
export const loginUser = async (obj) => {
  try {
    const result = await axios.post(userEp + "/login", obj);

    return result.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//======= transaction ==============
//post transaction
export const insertTransaction = async (obj) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userID = user._id;
    const result = await axios.post(transEp, obj, {
      headers: {
        authorization: userID,
      },
    });

    return result.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Get transactions
export const getallTransaction = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userID = user._id;
    const result = await axios.get(transEp, {
      headers: {
        authorization: userID,
      },
    });

    return result.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Delete transactions
export const deleteServerTransaction = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userID = user._id;
    const result = await axios.delete(transEp + "/" + _id, {
      headers: {
        authorization: userID,
      },
    });

    return result.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
