const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

router.get('/neworder',OrderController.createOrder);


module.exports =router;