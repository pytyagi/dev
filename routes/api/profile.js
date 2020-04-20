const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Users");

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      res.status(400).json({ msg: "There is no profile for this user" });
    }
  } catch {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  private

router.post(
  "/",
  [
    auth,
    check("status", "Status is Required").not().isEmpty(),
    check("skills", "Skills is Required").not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      }).populate("user", ["name", "avatar"]);

      if (!profile) {
        res.status(400).json({ msg: "There is no profile for this user" });
      }
    } catch {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
