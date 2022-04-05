const express = require('express');
const cors = require('cors');
const app = express();



app.use(
    cors({
        origin: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION"],
        credential: true,
    })
)

app.get("/", (req, res) => {
    res.status(200).send("hello world")
});

app.listen(8080, () => {
    console.log("kimvayne server open!");
})

module.exports = app;