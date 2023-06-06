import express from "express";
import { getUser, insertUser } from "../model/userModel/userModel.js";

const router = express.Router();

//Get user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //First email is email from data base and second is from frontend. In vs6 we can simply write {email}
    const user = await getUser({ email: email });
    if (user?.password === password) {
      user.password = undefined;
      return res.json({
        status: "success",
        message: "Login Successfully.",
        user,
      });
    }
    res.json({
      status: "error",
      message: "Invalid credentials.",
    });
  } catch (error) {
    next(error);
  }
});

//Insert user
router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message:
            "The user has been created successfully. Please check your email at : " +
            result.email,
        })
      : res.json({
          status: "error",
          message: "The user has not been created. Please try again!!",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already another user with this email and password. Please try another one";
    }
    next(error);
  }
});

export default router;
