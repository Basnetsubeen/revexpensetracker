import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    title: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("transactions", transactionSchema);
