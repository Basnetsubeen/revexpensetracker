import { getUser } from "../model/userModel/UserModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const filter = {
      _id: authorization,
    };
    const user = await getUser(filter);

    if (user?._id) {
      req.userInfo = user;
      return next();
    }
    res.status(403).res.json({
      status: "error",
      message: "unauthorized",
    });
  } catch (error) {
    next();
  }
};
