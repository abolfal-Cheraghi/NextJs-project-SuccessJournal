const handler = (req, res) => {
  return res
    .status(200)
    .json({ message: "welcome to API Route => /api/articles/categories" });
};

export default handler;
