const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_CVFiaWXe2rJm8FhrupWPGR7P");

router.post("/charge", async (req, res) => {
    try {
        console.log(JSON.parse(req.body));
        console.log(JSON.parse(req.body).id);
        let {status} = await stripe.charges.create({
            amount: 20,
            currency: "usd",
            description: "An example charge",
            source: JSON.parse(req.body)
        });

        res.json({status});
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});
module.exports = router;
