import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// controller for register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "user with this email already exist" });
    };
    const user = new User({ name, email, mobile, password });
    await user.save();
    return res.status(201).json(
      {
        success: true,
        message: "user registered successfully",
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
        isAdmin: user.isAdmin,
        token: generateToken(user._id, user.name, user.email, user.mobile, user.password, user.isAdmin),
      },
    );
  } catch (error) {
    console.log("error while registering user:", error.message);
    return res.status(500).json({ success: false, message: "error while registering user" });
  };
};

// controller for login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found" });
    };
    if (password !== user.password) {
      return res.status(401).json({ success: false, message: "invalid password" });
    };
    return res.status(200).json(
      {
        success: true,
        message: "user login successfully",
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
        isAdmin: user.isAdmin,
        token: generateToken(user._id, user.name, user.email, user.mobile, user.password, user.isAdmin),
      },
    );
  } catch (error) {
    console.log("error while logging in user:", error.message);
    return res.status(500).json({ success: false, message: "error while logging user" });
  };
};

// controller for fetch logged in user
export const loggedInUser = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ success: true, message: "logged in user fetched successfully", userData });
  } catch (error) {
    console.log("error while fetching logged in user data:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching logged in user data" });
  };
};

// controller for fetch all user -- Admin
export const fetchAllUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({ success: true, message: "user fetched successfully", user });
  } catch (error) {
    console.log("error while fetching user:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching user" });
  };
};

// controller for fetch single user -- Admin
export const fetchSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found" });
    };
    return res.status(200).json({ success: true, message: "single user fetched successfully", user });
  } catch (error) {
    console.log("error while fetching single user:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single user" });
  };
};

// controller for update user
export const updateUser = async (req, res) => {
  try {
    const { name, email, mobile, password, isAdmin } = req.body;
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email, mobile, password, isAdmin }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "user not found" });
    };
    return res.status(200).json({ success: true, message: "user updated successfully", updatedUser });
  } catch (error) {
    console.log("error while updating user:", error.message);
    return res.status(500).json({ success: false, message: "error while updating user" });
  };
};

// controller for delete user -- Admin
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(400).json({ success: false, message: "user not found" });
    };
    return res.status(200).json({ success: true, message: "user deleted Successfully", deletedUser });
  } catch (error) {
    console.log("error while deleting user:", error.message);
    return res.status(500).json({ success: false, "message": "error while deleting User" })
  };
};