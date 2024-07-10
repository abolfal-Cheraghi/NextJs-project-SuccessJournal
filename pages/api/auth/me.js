import connectToDB from "@/configs/db";

const handler = (req, res) => {
  connectToDB();
  return res
    .status(200)
    .json({ message: "welcome to API Route => /api/auth/me" });
};

export default handler;
