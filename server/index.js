const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("kimvayne server open!");
})

module.exports = app;