export default function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { email, id } = req.body;
    res.status(200).json({
      message: `You are registered for this event with the email : ${email} and event id : ${id}`,
    });
  }
}
