const User = require("../models/user");
const { hashPassword, comparePasswords, createJWT } = require("../utils/auth");
const ErrorHandler = require("../utils/customError");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return next(new ErrorHandler("User already exists", 400));
    }


    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return next(new ErrorHandler("Invalid credentials", 401));
    }

    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return next(new ErrorHandler("Invalid credentials", 401));
    }



    const token = createJWT(user);

    res.status(200).json({ token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
     });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
