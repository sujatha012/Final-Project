const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load User models
const User = require("../../models/User");
const Cart = require("../../models/Cart");


//@route GET api/profile/test
//@desc Tests profile route
//@access Public

router.get("/test", (req, res) => res.json({msg: "Profile Works"}));

//@route GET api/cart/test
//@desc Gert current users cart
//@access Public
router.get("/",passport.authenticate("jwt", {session:false }),(req, res) =>  {
  const errors={};
  Cart.findOne({user: req.user.id})
    .populate("user","email")
    .then (cart =>{
      if(!cart){
        errors.nocart = "There are no item added to your cart"
        return res.status(404).json(errors);
      }
      res.json(cart);
    })
    .catch(err => res.status(404).json(err));

});

//@route POST api/cart/test
//@desc Create user cart
//@access Private
router.post("/",passport.authenticate("jwt", {session:false }),
(req, res) =>  {
  //Get Fields
  const cartFields = {};
  cartFields.user = req.user.id;
  if(req.body.item) cartFields.item =req.body.item;  
  if(req.body.quantity) cartFields.item =req.body.quantity;  

  Cart.findOne({ user:req.user.id })
    .then(cart => {
      if(cart){
        //Edit Cart
        Cart.findOneAndUpdate(
          { user:req.user.id}, 
          {$set:cartFields},
          {new:true}
          ).then(cart => res.json(cart));
      } 
        //Save Cart
        new Cart(cartFields).save().then(cart => res.json(cart));
    });
  }
    
);
router.post("/charge", async (req, res) => {
  try {
      let {status} = await stripe.charges.create({
          amount: 20,
          currency: "usd",
          description: "An example charge",
          source: req.body
      });
       res.json({status});
  } catch (err) {
      res.status(500).end();
  }
});

module.exports = router;