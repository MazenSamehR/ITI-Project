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

router.post("/add-platform", (req, res) => {
    const platform = new Platform({
        name: req.body.name,
        description: req.body.description,
        logo: req.body.logo,
    });

    platform
        .save()
        .then((result) => {
        res.json({
            status: "SUCCESS",
            message: "Platform added successfully",
            data: result,
        });
        })
        .catch((err) => {
        res.json({
            status: "FAILED",
            message: "Error in adding platform",
        });
        });
});

router.delete("/delete-platform/:id", (req, res) => {
    Platform.findByIdAndRemove(req.params.id)
        .then((result) => {
        res.json({
            status: "SUCCESS",
            message: "Platform deleted successfully",
        });
        })
        .catch((err) => {
        res.json({
            status: "FAILED",
            message: "Error in deleting platform",
        });
        });
});

module.exports = router;
