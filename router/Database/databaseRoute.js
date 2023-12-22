const router = express.Router();


router.route('/').get(() => {
    res.send("welcome to Database API");
});

router.route('/createdatabase').get(() => {

});
module.exports = router;
