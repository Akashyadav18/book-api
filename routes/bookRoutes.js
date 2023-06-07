const express = require("express");
const { getBooks, updateBook, getBook, createBook, deleteBook } = require("../controllers/bookController");

const router = express.Router();

router.route("/").get(getBooks);

router.route("/").post(createBook);

router.route("/:id").get(getBook);

router.route("/:id").put(updateBook);

router.route("/:id").delete(deleteBook);

module.exports = router;