const handler = (req, res) => {
  return res
    .status(200)
    .json({ message: "welcome to API Route => /api/users" });
};

export default handler;
