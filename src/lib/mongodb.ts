import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB.");
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
  }
} 