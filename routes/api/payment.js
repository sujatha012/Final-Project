const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_CVFiaWXe2rJm8FhrupWPGR7P");
<<<<<<< HEAD
 
=======
>>>>>>> 691006ba2daaae5796a08ffc18dab013bb480ef3

router.post("/charge", async (req, res) => {
    try {
        let {status} = await stripe.charges.create({
            amount: 20,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });
<<<<<<< HEAD
         res.json({status});
=======

        res.json({status});
>>>>>>> 691006ba2daaae5796a08ffc18dab013bb480ef3
    } catch (err) {
        res.status(500).end();
    }
});
<<<<<<< HEAD
module.exports = router; 
=======
module.exports = router;
>>>>>>> 691006ba2daaae5796a08ffc18dab013bb480ef3
