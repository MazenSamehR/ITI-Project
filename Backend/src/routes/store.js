const express = require("express");
const router = express.Router();

const Platform = require("../models/Stores");

router.get("/stores", (req, res) => {
    Platform.find()
        .then((result) => {
        res.json({
            status: "SUCCESS",
            message: "Stores fetched successfully",
            data: result,
        });
        })
        .catch((err) => {
        res.json({
            status: "FAILED",
            message: "Error in fetching stores",
        });
        });
});
module.exports = router;
