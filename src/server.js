const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/search/:q", (req, res) => {
    console.log("Search: " + req.params.q);
    axios
        .get("https://api.datamuse.com/sug?s=" + req.params.q)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({});
        });
});

app.get("/search/", (req, res) => {
    console.log("Search empty");
    res.json([]);
});

app.listen(3000, function() {
    console.log("Server listening on port 3000!");
});
