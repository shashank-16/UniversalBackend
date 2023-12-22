const express = require("express")
const router = express.Router();

const iosCardController = require('../../controller/iosCardApplication/iosController');

const iosController = new iosCardController();
router.route('/').get((req, res) => {
    res.send("using iosCard");
});
router.route("/userList").get(iosController.UserList);

module.exports = router; 