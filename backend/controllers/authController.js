import User from "../models/userModel";

export const handleUserRegister = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    email,
    password: hashedPassword,
  };
  const user = new User(userData);
  const response = await User.save();
  res.status(201).json(response);
};
export const handleUserLogin = async (req, res) => {};
