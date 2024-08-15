const express = require("express");
const router = express.Router();

const Platform = require("../models/Platform");

router.get("/platforms", (req, res) => {
    Platform.find()
        .then((result) => {
        res.json({
            status: "SUCCESS",
            message: "Platforms fetched successfully",
            data: result,
        });
        })
        .catch((err) => {
        res.json({
            status: "FAILED",
            message: "Error in fetching platforms",
        });
        });
});

module.exports = router;
