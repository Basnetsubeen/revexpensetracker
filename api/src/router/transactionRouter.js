import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "../model/userTransaction/TransactionModel.js";

const router = express.Router();

//Add transaction
router.post("/", async (req, res, next) => {
  try {
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "The transaction has been successfully added.",
        })
      : res.json({
          status: "error",
          message: "The transaction has not been added. Please try again?",
        });
  } catch (error) {
    next(error);
  }
});

//Get transaction
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const filter = {
      userID: authorization,
    };
    const result = await getTransaction(filter);
    res.json({
      status: "success",
      message: "Here is your transaction.",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//Get transaction
router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;
    if (authorization && _id) {
      const filter = {
        userID: authorization,
        _id,
      };
      const result = await deleteTransaction(filter);
      if (result._id) {
        return res.json({
          status: "success",
          message: "Your transaction has been successfully deleted.",
        });
      }
    }
    res.json({
      status: "error",
      message: "Your transaction has not been deleted yet. Please try agian?.",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
