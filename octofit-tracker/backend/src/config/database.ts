import mongoose from 'mongoose';

export const connectionString = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
export const db = mongoose.connection;

export async function connectDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionString);
  }
  return db;
}

db.on('error', (error) => console.error('MongoDB connection error:', error));

export default db;
