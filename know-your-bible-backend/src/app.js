import bcrypt from 'bcryptjs';
import cors from 'cors';
import express from 'express';
import { createUser, findUserByEmail } from './models/user.js'; // Adjust path if needed

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // replaces body-parser

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  console.log("📩 Received sign-up request:", req.body);

  if (!username || !email || !password) {
    console.warn("❌ Missing fields in request body");
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      console.warn("❌ Email already exists");
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, email, hashedPassword);

    console.log("✅ User created successfully");
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error("❗ Server error:", err);
    res.status(500).json({ message: 'Server error during signup' });
  }
});


// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", req.body); // Debugging

  if (!email || !password || !email.trim() || !password.trim()) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await findUserByEmail(email.trim());
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
