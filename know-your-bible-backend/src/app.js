// app.js
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createUser, findUserByEmail } from './models/user.js'; // Import functions

const app = express();
const port = 3000;

app.use(cors()); // <-- ADD this middleware
app.use(bodyParser.json());


// Sign-up Route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if email already exists
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use' });
  }

  // Create the new user
  await createUser(username, email, password);
  res.status(201).json({ message: 'User created successfully' });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Send success response
  res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
