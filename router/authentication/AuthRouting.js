const express = require("express");
const router = express.Router();
const authController = require('../../controller/AuthController/auth')

router.route('/').get((req, res) => {
    res.send("choose an preferrred API call");
});

router.route('/setUpAuth').get(authController.setUpAuth);
router.route('/signup').get(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;