const router = require("express").Router();
const { sendEmail } = require("../controllers/contactController");

router.post("/", sendEmail);

module.exports = router;
