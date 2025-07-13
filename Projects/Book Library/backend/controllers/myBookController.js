import MyBook from '../models/myBookModel.js';

export const addBookToUser = async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user._id;

  const exists = await MyBook.findOne({ userId, bookId });
  if (exists) return res.status(400).json({ message: 'Already added' });

  const entry = await MyBook.create({ userId, bookId, status: 'Want to Read', rating: 0 });
  res.status(201).json(entry);
};

export const getMyBooks = async (req, res) => {
  const userId = req.user._id;
  const entries = await MyBook.find({ userId }).populate('bookId');
  res.json(entries);
};

export const updateStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  const userId = req.user._id;

  const updated = await MyBook.findOneAndUpdate({ userId, bookId }, { status }, { new: true });
  res.json(updated);
};

export const updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  const userId = req.user._id;

  const updated = await MyBook.findOneAndUpdate({ userId, bookId }, { rating }, { new: true });
  res.json(updated);
};
