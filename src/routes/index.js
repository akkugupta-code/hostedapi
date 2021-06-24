const express = require("express");
const { bookController } = require("../controllers");
const { Book } = require("../models");
const { Order } = require("../models");
const router = express.Router();
// router.use(express.json());

router.get("/getbooks", bookController.getBooks);

// function paginatedResults(model) {
//   return
// }

router.get("/createbook", async function (req, res) {
  const book = new Book({
    book_name: req.query.book_name,
    book_description: req.query.book_description,
  });
  const result = await book.save();
  res.status(201).send({ result });
});

router.post("/createorder", (req, res) => {
  //console.log(req.body);
  const order = new Order(req.body);
  //console.log(req.body.Books);
  let total_quantity = "";
  let total_price = "";
  var arr = [];
  var arr2 = [];
  req.body.Books.forEach((item) => {
    console.log(item.Quantity);
    var a = parseInt(item.Quantity);
    var b = parseInt(item.price);
    arr.push(a);
    arr2.push(b);
  });
  total_quantity = arr.reduce((a, b) => a + b, 0);
  console.log(total_quantity);
  total_price = arr2.reduce((a, b) => a + b, 0);
  order.total_amount = total_price;
  console.log(total_price);
  if (total_quantity < 10) {
    const result = order
      .save()
      .then((data) => {
        res.status(201).send({ data });
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  } else {
    throw new Error(
      "The Books cannot be greater than 10. Please do order in next purchase"
    );
  }
});

module.exports = router;
