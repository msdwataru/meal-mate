export default async function handler(req, res) {
  const { question } = req.body;

  // Mock response
  const answer = 'This is a mock response.';

  res.status(200).json({ answer });
}
