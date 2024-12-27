const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    console.log("It is processing");
    res.json(user);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const salt = 20;
    const hashedPassword = await bcrypt.hash(password, salt);

    const checkMail = await User.findOne({ email });

    if (checkMail != null) {
      res
        .status(409)
        .json({ message: "Email Id already existed, Create a new Email Id" });
      console.log("in the checkmail");
    } else {
      const user = await User.create({ name, email, password: hashedPassword });
      res.status(201).json({ user, message: "User created successfully" });
    }
  } catch {
    res.status(500).json({ message: "Server Error in addUser" });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body, "login");
    const user = await User.findOne({ email });

    console.log(user, "User");

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please register" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.status(200).json({ message: "Successful" });
    } else {
      res.status(404).json({ message: "Password wrong" });
    }
    // if (user) {
    //     res.status(201).json({message: "Login successful"})
    // } else {
    //     res.json({message: "Please check the email and password"})
    // }
  } catch {
    console.log(error);
  }
};

const delUser = async (req, res) => {
  try {
    const uid = req.params.id;
    if (uid == null) {
      res.json({ error: "there is some error. the id is empty" });
    } else {
      await User.findByIdAndDelete(uid);
      res.redirect("/");
    }
  } catch {
    res.status(404).json({ message: "There some error" });
  }
};

const updUser = async (req, res) => {
  try {
    const uid = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    // const tal = tale.find(t => t.id == uid);

    if (uid == null) {
      res.json({ error: "there is some error. the id is empty" });
    }

    if (name != null && email != null && password != null && age != null) {
      const user = await User.findByIdAndUpdate(
        uid,
        {
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
          age: req.body.age,
        },
        { new: true }
      ); // the third parameter will return the updated value in the user id
      res.json(user);
    } else {
      res.json({ error: "There is some in the request body object" });
    }
  } catch {
    res.status(404).json({ message: "There some error" });
  }
};

const getUserById = async (req, res) => {
  const uid = req.params.id;

  try {
    if (uid == null) {
      res.json({
        error: "there is some error. the id is empty or not a number",
      });
    } else {
      console.log("It is done");
      const user = await User.findById(uid);
      res.json(user);
    }
  } catch (error) {
    res.json({ error: "There is not an object with this id" });
  }
};

const findOnes = async (req, res) => {
  try {
    const user = await User.findOne({ age: 24 });
    res.json(user);
  } catch {
    res.json({ error: "There is an error in the findOne function" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const user = await User.deleteOne({ age: 25 });
    res.json(user);
  } catch {
    res.json({ error: "There is an error in the deleteOne function" });
  }
};

const updateOne = async (req, res) => {
  try {
    const user = await User.updateOne(
      { age: req.params.age },
      { name: req.body.name }
    );
    res.json(user);
  } catch {
    res.json({ error: "There is an error in the updateOne function" });
  }
};

const updateMany = async (req, res) => {
  try {
    const user = await User.updateMany(
      { age: { $eq: 24 } },
      { $set: { email: "ham@email.com" } }
    );
    res.json(get);
  } catch {
    res.json({ error: "There is an error in the updateMany function" });
  }
};

const hash = async (req, res) => {
  try {
    const get = await User.find().select("password");
    res.json(get);
  } catch {
    res.json({ error: "There is an error in the updateMany function" });
  }
};

const deleteMany = async (req, res) => {
  try {
    const user = await User.deleteMany({ age: req.params.age });
    res.json(user);
  } catch {
    res.json({ error: "There is an error in the deleteMany function" });
  }
};

const save = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    });
    await user.save();

    res.json(user);
  } catch {
    res.json({ error: "There is an error in the save function" });
  }
};

module.exports = {
  getUser,
  addUser,
  delUser,
  updUser,
  getUserById,
  findOnes,
  deleteOne,
  updateOne,
  updateMany,
  deleteMany,
  save,
  hash,
  login,
};
