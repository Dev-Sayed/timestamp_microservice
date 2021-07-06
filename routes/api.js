let express = require("express");
let router = express.Router();

let myDateObj = {};
let timestamp = null;
let myDateStr = "";
let myArr = [];
let myFinalDateStr = "";

router.get("/", (req, res) => {
    myDateObj = new Date();
    timestamp = myDateObj.valueOf();
    myDateStr = myDateObj.toString();
    myArr = myDateStr.split(" ");
    myFinalDateStr = `${myArr[0]}, ${myArr[2]} ${myArr[1]} ${myArr[3]} ${myArr[4]} ${myArr[5]}`;
    res.json({unix: timestamp, utc: myFinalDateStr});
});

router.get("/:date", (req, res) => {
    let date_str = req.params.date;
    let testStr = "";
    if (!Number.isNaN(Number(date_str))) {
        myDateObj = new Date(Number(date_str));
        testStr = myDateObj.toString();
        if (testStr === "Invalid Date") {
            res.json({ error : "Invalid Date" });
        } else {
            timestamp = myDateObj.valueOf();
            myDateStr = myDateObj.toString();
            myArr = myDateStr.split(" ");
            myFinalDateStr = `${myArr[0]}, ${myArr[2]} ${myArr[1]} ${myArr[3]} ${myArr[4]} ${myArr[5]}`;
            res.json({unix: timestamp, utc: myFinalDateStr});
        }
    } else {
        myDateObj = new Date(date_str);
        testStr = myDateObj.toString();
        if (testStr === "Invalid Date") {
            res.json({ error : "Invalid Date" });
        } else {
            timestamp = myDateObj.valueOf();
            myDateStr = myDateObj.toString();
            myArr = myDateStr.split(" ");
            myFinalDateStr = `${myArr[0]}, ${myArr[2]} ${myArr[1]} ${myArr[3]} ${myArr[4]} ${myArr[5]}`;
            res.json({unix: timestamp, utc: myFinalDateStr});
        }
    }
});

module.exports = router;