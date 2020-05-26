const express = require("express");
const router = express.Router();
const Orders = require("./models/Orders");

// define the home page route
router.get("/", function(req, res) {
  res.send("Birds home page");
});
// define the about route
router.post("/saveorder", async (req, res) => {
  console.log(req.body);
  const order = new Orders({
    orderNo: req.body.orderNo,
    foodItem: req.body.foodItem,
    price: req.body.price,
    quantity: req.body.quantity
  });

  try {
    const savedOrder = await order.save();
    res.send(savedOrder);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
