const express = require("express");
const router = express.Router();
const {
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
  getUserByEmail,
} = require("../controllers/userController");

// routes
router.get("/", getUser);

router.post("/add", addUser);

router.delete("/del/:id", delUser);

router.put("/upd/:id", updUser);

router.get("/getUser/:id", getUserById);

router.get("/findOne", findOnes);

router.get("/deleteOne", deleteOne);

router.delete("/deleteMany/:age", deleteMany);

router.put("/updateOne/:age", updateOne);

router.put("/updateMany", updateMany);

router.post("/save", save);

router.get("/hash", hash);

router.post("/login", login);

router.get("/getUserAccount", getUserByEmail);

module.exports = router;
