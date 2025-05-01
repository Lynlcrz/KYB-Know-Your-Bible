// models/user.js
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('know-your-bible');
const users = db.collection('users');

export async function findUserByEmail(email) {
  await client.connect();
  return users.findOne({ email });
}

export async function createUser(username, email, hashedPassword) {
  await client.connect();
  return users.insertOne({ username, email, password: hashedPassword });
}
