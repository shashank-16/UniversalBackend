//manage Database

const connection = require('../../model/SQLSetup');

const setUpAuth = async (req, res) => {
    // let entityName = req.body.entity;
    connection.getConnection((err, poolConnection) => {
        poolConnection.query('SELECT * FROM db', (err, results, fields) => {
            if (err) res.send("error in db");
            else {
                console.log("results", results);
                res.send("succesfull query");
            }
        });
        poolConnection.release();
    });


}

const SignUpdata = async (req, res) => {
    connection.getConnection((err, poolConnection) => {
        poolConnection.query('SELECT * FROM db', (err, results, fields) => {
            if (err) {
                console.log(err);
                res.send("error in db");
            }
            else {
                console.log("results", results);
                res.send("succesfull query");
            }
        });
        // const body = req.body;
        // console.log(body);
        res.send("sucessfull save the data");
        poolConnection.release();
    });
};

const Login = async (req, res) => {
    const body = req.body;
    console.log(body);
}
module.exports = {
    signup: SignUpdata,
    login: Login,
    setUpAuth: setUpAuth
};