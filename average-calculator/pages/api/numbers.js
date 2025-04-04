import axios from "axios";

let windowSize = 5; // Sliding window size
let window = []; // Stores the last N numbers

export default async function handler(req, res) {
  const { type } = req.query;

  const urls = {
    prime: "http://20.244.56.144/numbers/primes",
    fibonacci: "http://20.244.56.144/numbers/fibo",
    even: "http://20.244.56.144/numbers/even",
    random: "http://20.244.56.144/numbers/rand",
  };

  if (!urls[type]) return res.status(400).json({ error: "Invalid type" });

  try {
    const response = await axios.get(urls[type]);
    const newNumbers = response.data.numbers || [];

    // Maintain sliding window
    window = [...window, ...newNumbers].slice(-windowSize);

    const average =
      window.reduce((sum, num) => sum + num, 0) / window.length || 0;

    res.json({ numbers: newNumbers, average });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch numbers" });
  }
}
