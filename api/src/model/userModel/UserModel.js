import userSchema from "./UserSchema.js";

export const insertUser = (obj) => {
  return userSchema(obj).save();
};

export const getUser = (filter) => {
  return userSchema.findOne(filter);
};
