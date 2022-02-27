const express = require("express");
const router = express.Router();

const Mp3player = require("../modules/mp3_module");
const redis = require("../configs/redis");
router.get("", async (req, res) => {
  try {
    //const mp3player = await Mp3player.find().lean().exec();
    redis.get("mp3player", async function (err, fetchmp3) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (fetchmp3) {
        return res
          .status(201)
          .send({ mp3player: JSON.parse(fetchmp3), redis: true });
      }
      const mp3p = await Mp3player.find().lean().exec();
      redis.set("mp3player", JSON.stringify(mp3p));
      return res.status(201).send({ mp3player: mp3p, redis: false });
    });
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const mp3player = await Mp3player.create(req.body);
    const mp3p = await Mp3player.find().lean().exec();
    redis.set("mp3player", JSON.stringify(mp3p));
    return res.status(201).send(mp3player);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const mp3player = await Mp3player.findByIdAndDelete(req.params.id);
    const mp3p = await Mp3player.find().lean().exec();
    redis.set("mp3player", JSON.stringify(mp3p));
    return res.status(201).send(mp3player);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

module.exports = router;
