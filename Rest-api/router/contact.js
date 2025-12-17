const router = require("express").Router();
const { sendEmail } = require("../controllers/contactContoller");

router.post("/", sendEmail);

module.exports = router;
