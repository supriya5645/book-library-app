import Book from "../models/Book.js";

// 1. Only get books that belong to the logged-in user
export const getBooks = async (req, res) => {
  try {
    // We filter by 'user: req.user.id' (or req.user.userId depending on your token)
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching your books" });
  }
};

// 2. Save the new book with the user's ID
export const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    // We explicitly set the 'user' field using the ID from the token
    const book = await Book.create({
      title,
      author,
      user: req.user.id,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Error saving book" });
  }
};
