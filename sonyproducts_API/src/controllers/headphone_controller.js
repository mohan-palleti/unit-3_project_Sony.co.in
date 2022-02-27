const express = require("express");
const router = express.Router();

const Headphone = require("../modules/headPhone_module");
const redis = require("../configs/redis");
router.get("", async (req, res) => {
  try {
    //const headphone = await Headphone.find().lean().exec();
    redis.get("headphone", async function (err, fetchhead) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (fetchhead) {
        return res
          .status(201)
          .send({ headphone: JSON.parse(fetchhead), redis: true });
      }
      const head = await Headphone.find().lean().exec();
      redis.set("headphone", JSON.stringify(head));
      return res.status(201).send({ headphone: head, redis: false });
    });
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const headphone = await Headphone.create(req.body);
    const head = await Headphone.find().lean().exec();
    redis.set("headphone", JSON.stringify(head));
    return res.status(201).send(headphone);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const headphone = await Headphone.findByIdAndDelete(req.params.id);
    const head = await Headphone.find().lean().exec();
    redis.set("headphone", JSON.stringify(head));
    return res.status(201).send(headphone);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

module.exports = router;
