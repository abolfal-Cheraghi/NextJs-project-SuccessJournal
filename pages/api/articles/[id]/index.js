const handler = (req, res) => {
  return res
    .status(200)
    .json({ message: "welcome to API Route => /api/articles/1 - 2 - 4" });
};

export default handler;
