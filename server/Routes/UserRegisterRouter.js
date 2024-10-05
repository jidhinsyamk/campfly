const express = require("express");
const registerRouter = express.Router();
const bcrypt = require("bcryptjs");

registerRouter.post("/userreg", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ email: req.body.email });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "user already exists" });
    }
    const oldPhone = await registerDB.findOne({ contact: req.body.contact });
    const hashedpassword = await bcrypt.hash(req.body.password, 12);
    if (oldPhone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "contact number already exists",
      });
    }
    let log = {
      email: req.body.email,
      password: hashedpassword,
      role: 1,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      adress: req.body.adress,
      // email:req.body.email,
      contact: req.body.contact,
      age: req.body.age,
    };
    const result2 = await registerDB(reg).save();
    if (result2) {
      return res.status(201).json({
        success: true,
        error: false,
        massage: "registration completed",
        data: result2,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, message: "somthing went wrong" });
    console.log(error);
  }
});
