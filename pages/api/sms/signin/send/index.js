const handler = (req, res) => {
  return res
    .status(200)
    .json({ message: "welcome to API Route => /api/sms/signin/send" });
};

export default handler;
