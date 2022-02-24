const express = require("express");
const router = express.Router();

const TVmodels = require("../modules/tv_module");
const redis = require("../configs/redis");
router.get("", async (req, res) => {
  try {
    redis.get("tv", async function (err, fetchtv) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (fetchtv) {
        return res.status(201).send({ TV: JSON.parse(fetchtv), redis: true });
      }
      const models = await TVmodels.find().lean().exec();
      redis.set("tv", JSON.stringify(models));
      return res.status(201).send({ TV: models, redis: false });
    });

    //redis.set("TVproducts", JSON.stringify({ models, redis: true }));
    //return res.status(201).send(models);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const models = await TVmodels.create(req.body);
    const allmodels = await TVmodels.find().lean().exec();
    redis.set("tv", JSON.stringify(allmodels));
    return res.status(201).send(models);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const models = await TVmodels.findByIdAndDelete(req.body);
    const allmodels = await TVmodels.find().lean().exec();
    redis.set("tv", JSON.stringify(allmodels));
    return res.status(201).send(models);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

module.exports = router;
