// models/user.js
import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // Your MongoDB URL
const dbName = 'know-your-bible'; // Your Database Name

export const createUser = async (username, email, password) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  const collection = db.collection('users');

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    username,
    email,
    password: hashedPassword,
  };

  await collection.insertOne(user);
  console.log('User created successfully!');
  client.close();
};

export const findUserByEmail = async (email) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  const collection = db.collection('users');

  const user = await collection.findOne({ email });
  client.close();
  return user;
};
