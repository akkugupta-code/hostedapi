const express = require("express");
const { bookController } = require("../controllers");
const { orderController } = require("../controllers");
const { Book } = require("../models");
const { Order } = require("../models");
const router = express.Router();

//creating books in db
router.get("/createbook", bookController.createBooks);

//get all paginated books
router.get("/getbooks", bookController.getBooks);

//create sales order
router.post("/createorder", orderController.createOrder);

//get particular sales order by id
router.get("/getorderbyid/:id", orderController.getOrder);

module.exports = router;
