const express = require("express");
const Book = require("../models/Book");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// GET: Fetch only books belonging to the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST: Save book with the user's ID
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = new Book({ title, author, user: req.user.id });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
});

// DELETE: Remove a specific book
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
