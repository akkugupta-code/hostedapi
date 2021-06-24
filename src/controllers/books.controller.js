const { Book } = require("../models");

const getBooks = async (req, res, next) => {
  console.log(req.query);
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  console.log("page limit", page, limit);
  //   const startIndex = (page - 1) * limit;
  //   const endIndex = page * limit;
  const results = {};

  //   if (endIndex < (await Book.countDocuments().exec())) {
  //     results.next = {
  //       page: page + 1,
  //       limit: limit,
  //     };
  //   }
  //   if (startIndex > 0) {
  //     results.previous = {
  //       page: page - 1,
  //       limit: limit,
  //     };
  //   }
  try {
    const dataPromise = Book.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
    const countPromise = Book.count().exec();
    await Promise.all([dataPromise, countPromise]).then((values) => {
      results.data = values[0];
      results.count = values[1];
    });
    // res.paginatedResults = results;
    // next();
    res.status(200).send(results);
  } catch (e) {
    next(e.message);
    // res.status(500).json({ message: e.message });
  }
};

const createBooks = async function (req, res) {
  const book = new Book({
    book_name: req.query.book_name,
    book_description: req.query.book_description,
  });
  const result = await book.save();
  res.status(201).send({ result });
};

module.exports = {
  getBooks,
  createBooks,
};
