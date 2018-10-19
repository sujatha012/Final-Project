const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_CVFiaWXe2rJm8FhrupWPGR7P");

router.post("/charge", async (req, res) => {
    try {
        console.log(JSON.parse(req.body));
        console.log(JSON.parse(req.body).id);
        reqSrc = JSON.parse(req.body);
        reqSrc.id='tok_visa';
        reqSrc.card.id='tok_visa';


        let {status} = await stripe.charges.create({
            amount: JSON.parse(req.body).amount,
            currency: "usd",
            description: "An example charge",
            source: 'tok_visa'
        });

        res.json({status});
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});
module.exports = router;
