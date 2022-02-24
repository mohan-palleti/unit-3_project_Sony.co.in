require("dotenv").config();

const { body, validationResult } = require("express-validator");
const User = require("../modules/user_module");
const express = require("express");
const router = express.Router();

router.post(
  "/emailCheck",
  body("email").notEmpty().isEmail().withMessage("enter a valid email"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      let email = req.body.email;
      if (user) {
        return res
          .status(401)
          .send({ status: false, message: "enter another email" });
      } else {
        return res.status(202).send({ email, status: true });
      }
      //return res.send("ji");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
);

router.post(
  "/register",
  body("email").notEmpty().isEmail().withMessage("enter a valid email"),
  body("name").notEmpty().isString().withMessage("enter a proper name"),
  body("lastname").notEmpty().isString().withMessage("enter a proper name"),
  body("password").notEmpty().isString().withMessage("enter a proper password"),
  body("phone")
    .notEmpty()
    .isNumeric()
    .withMessage("enter a proper phoner number"),
  body("city").notEmpty().isString().withMessage("enter a proper city"),
  body("state").notEmpty().isString().withMessage("enter a proper state"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      user = await User.create(req.body);

      return res
        .status(201)
        .send({ user, message: "registration success", status: true });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
);

router.post(
  "/login",
  body("email").notEmpty().isEmail().withMessage("enter a proper email"),
  body("password")
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8 })
    .withMessage("Enter a proper password"),
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) return res.status(401).send({ status: false });

      const match = user.checkPassword(req.body.password);
      if (!match) return res.status(401).send({ status: false });

      return res.status(201).send({ user, status: true });
    } catch (err) {
      res.status(501).send(err.message);
    }
  }
);

module.exports = router;
