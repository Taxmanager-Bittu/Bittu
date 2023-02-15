// All require modules
var express = require("express");
var OgData = require("../config/Og.json");
var router = express.Router();

// Route Main Folder

// Route to index page
router.get(["/", "/index", "/Home"], (req, res) => {
    return res.status(200).render("../views/mainpages/index.ejs", { title: "Home - TaxManager.In" });
});

// Route to About Us page
router.get(["/About_Us", "/AboutUs", "/Us", "/about-us"], (req, res) => {
    return res.status(200).render("../views/mainpages/about-us.ejs", { title: "About - TaxManager.In" });
});

// Route to Contact Us page
router.get(["/Contact_us", "/ContactUs", "/contact-us"], (req, res) => {
    return res.status(200).render("../views/mainpages/contact-us.ejs", { title: "Contact Us - TaxManager.In" });
});

// Route to LeaderShip page
router.get(["/Leader_Ship", "/LeaderShip", "/leadership"], (req, res) => {
    return res.status(200).render("../views/mainpages/leadership.ejs", { title: "Leadr Ship - TaxManager.In" });
});

// Route to We are Hirring page
router.get(["/we-are-hiring", "/we_are_hiring", "/we're-hiring"], (req, res) => {
    return res.status(200).render("../views/mainpages/we-are-hiring.ejs", { title: "We're Hirring - TaxManager.In" });
});

// Route to Gallery page
router.get(["/Gallery", "/Pictures", "/gallery"], (req, res) => {
    return res.status(200).render("../views/mainpages/gallery.ejs", { title: "Gallery - TaxManager.In" });
});

// Route to  Media page
router.get(["/Media", "/InMedia", "/media"], (req, res) => {
    return res.status(200).render("../views/mainpages/media.ejs", { title: "Media - TaxManager.In" });
});

// Route to  FAQs   page
router.get(["/FAQs ", "/FAQ", "/faq"], (req, res) => {
    return res.status(200).render("../views/mainpages/faq.ejs", { title: "FAQs   - TaxManager.In" });
});

// Route to  Coming Soon page
router.get(["/Coming_Soon", "/ComingSoons", "/Coming", "/Soon", "coming-soon"], (req, res) => {
    return res.status(200).render("../views/mainpages/coming-soon.ejs", { title: "Coming Soon  - TaxManager.In" });
});

// Route to  Blogs   page
router.get(["/Blogs", "/blogs", "/blog", "Blog", "Post", "post"], (req, res) => {
    return res.status(200).render("../views/mainpages/blog.ejs", { title: "Blog  - TaxManager.In" });
});

// Route to  Support page
router.get(["/support", "/Support"], (req, res) => {
    return res.status(200).render("../views/mainpages/support.ejs", { title: "Support  - TaxManager.In" });
});


// Route terms_and_conditions

// Route to  Legal Disclaimer  page
router.get(["/Legal_Disclaimer", "/LegalDisclaimer", "/Legal", "/Disclaimer", "/legal-disclaimer", "/legal-disclaimer"], (req, res) => {
    return res.status(200).render("../views/terms_and_conditions/legal-disclaimer.ejs", { title: "Legal Disclaimer  - TaxManager.In" });
});

// Route to  Terms and Conditions  page
router.get(["/Terms_and_Conditions", "/TermsAndConditions", "/Terms", "/Conditions", "/terms-and-conditions", "/Terms-And-Conditions"], (req, res) => {
    return res.status(200).render("../views/terms_and_conditions/terms-and-conditions.ejs", { title: "Terms and Conditions  - TaxManager.In" });
});

// Route to  Security  page
router.get(["/Security", "/security"], (req, res) => {
    return res.status(200).render("../views/terms_and_conditions/security.ejs", { title: "Security  - TaxManager.In" });
});

// Route to  Security  page
router.get(["/privacy-policy", "/Privacy-Policy", "PrivacyPolicy", "Policy"], (req, res) => {
    return res.status(200).render("../views/terms_and_conditions/privacy-policy.ejs", { title: "Privacy Policy  - TaxManager.In" });
});


// Route Blogs 



module.exports = router;