import { MongoClient } from 'mongodb';

// Replace the following URL with your actual MongoDB connection URL
const uri = "mongodb://localhost:27017";  // Local MongoDB instance
const dbName = 'know-your-bible';  // Your database name

const client = new MongoClient(uri);

async function connect() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName); // Use the database
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Export the connection function
export default connect;
