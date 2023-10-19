const getBooks = async (req, res, next) => {
    const { user } = req;
    const { books } = user;
    res.status(200).json({ data: { books } });
};

module.exports = getBooks;
