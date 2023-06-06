import TransactionSchema from "./TransactionSchema.js";

export const addTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

//filter is an object
export const getTransaction = (filter) => {
  return TransactionSchema.find(filter);
};
//filter by an object delete
export const deleteTransaction = (filter) => {
  return TransactionSchema.findOneAndDelete(filter);
};
