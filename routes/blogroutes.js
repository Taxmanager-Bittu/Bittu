// All require modules
var express = require("express");
var OgData = require("../config/Og.json");
var router = express.Router();


// Route to  Calculator-Your-Tax-Return-FY-23-24-Under-New-Regime-and-Old-Regime  page
router.get(["/Calculator-Your-Tax-Return-FY-23-24-Under-New-Regime-and-Old-Regime"], (req, res) => {
    return res.status(200).render("../views/blogs/Calculator-Your-Tax-Return-FY-23-24-Under-New-Regime-and-Old-Regime.ejs", { title: "Calculator Your Tax ReturnFY-23-24-UnderNew -Regime-and Old Regime  - TaxManager.In" });
});

// Route to  How_Do_You_Create_A_Financial_Portfolio  page
router.get(["/How_Do_You_Create_A_Financial_Portfolio", "How-Do-You-Create-A-Financial-Portfolio"], (req, res) => {
    return res.status(200).render("../views/blogs/How_Do_You_Create_A_Financial_Portfolio.ejs", { title: "How Do You Create A Financial Portfolio  - TaxManager.In" });
});

// Route to  How_to_Link_AADHAAR_with_your_PAN  page
router.get(["/How_to_Link_AADHAAR_with_your_PAN", "How-to-Link-AADHAAR-with-your-PAN"], (req, res) => {
    return res.status(200).render("../views/blogs/How_to_Link_AADHAAR_with_your_PAN.ejs", { title: "How to Link AADHAAR with your PAN  - TaxManager.In" });
});

// Route to  How_Do_You_Create_A_Financial_Portfolio  page
router.get(["/How_to_Link_AADHAAR_with_your_PAN", "How-to-Link-AADHAAR-with-your-PAN"], (req, res) => {
    return res.status(200).render("../views/blogs/How-To-Select-The-Relevant-ITR-Form.ejs   ", { title: "How to Link AADHAAR with your PAN  - TaxManager.In" });
});




module.exports = router;