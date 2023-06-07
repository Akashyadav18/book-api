const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

const getBooks = asyncHandler (async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books);
});

const createBook =asyncHandler (async (req, res) => {
    //console.log(req.body);
    const {name, img, summery} = req.body;
    if(!name || !img || !summery){
        res.status(400);
        throw new Error("All Fields are mandatory!");
    }
    const book = await Book.create({
        name,
        img, 
        summery
    })
    res.status(201).json(book);
});

const getBook = asyncHandler (async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not Found!");
    }
    res.status(200).json(book);
});

const updateBook =asyncHandler (async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not Found");
    }
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        )
    res.status(200).json(updatedBook);
});

// const deleteBook =asyncHandler (async (req, res) => {
//     const book = await Book.findById(req.params.id);
//     if(!book){
//         res.status(404);
//         throw new Error("Book not found!");
//     }
//     const deletedBook = await Book.findByIdAndRemove(
//         req.params.id,
//         req.body,
//         {new: true}
//     )
//     res.status(200).json(deletedBook);
// });

const deleteBook = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404);
            throw new Error("Book not found!");
        }
        const deletedBook = await Book.findByIdAndRemove(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(deletedBook);
    } catch (err) {
        errorHandler(err, req, res);
    }
});


module.exports = {getBooks, createBook, getBook, updateBook, deleteBook}