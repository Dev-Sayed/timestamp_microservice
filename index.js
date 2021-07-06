let express = require("express");

let app = express();

app.use(express.static('public'));

app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => console.log("server is running"));