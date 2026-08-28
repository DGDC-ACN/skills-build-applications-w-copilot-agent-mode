import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}), Team.deleteMany({}), Activity.deleteMany({}),
      Leaderboard.deleteMany({}), Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'alex.runner', email: 'alex@example.com', name: 'Alex Rivera', profile: 'endurance' },
      { username: 'jordan.lifts', email: 'jordan@example.com', name: 'Jordan Lee', profile: 'strength' },
      { username: 'sam.yoga', email: 'sam@example.com', name: 'Sam Patel', profile: 'mobility' },
    ]);
    const teams = await Team.create([
      { name: 'Morning Momentum', description: 'Start strong together.', members: [users[0]._id, users[2]._id] },
      { name: 'Power Hour', description: 'Strength and consistency.', members: [users[1]._id] },
    ]);
    await Activity.create([
      { user: users[0]._id, type: 'Running', durationMinutes: 35, calories: 410, completedAt: new Date() },
      { user: users[1]._id, type: 'Strength training', durationMinutes: 45, calories: 320, completedAt: new Date() },
      { user: users[2]._id, type: 'Yoga', durationMinutes: 30, calories: 150, completedAt: new Date() },
    ]);
    await Leaderboard.create([
      { user: users[0]._id, points: 860, rank: 1 },
      { user: users[1]._id, points: 740, rank: 2 },
      { user: users[2]._id, points: 620, rank: 3 },
    ]);
    await Workout.create([
      { name: 'Full Body Foundation', focus: 'Strength', difficulty: 'Beginner', durationMinutes: 30, exercises: [{ name: 'Bodyweight squat', sets: 3, reps: 12 }, { name: 'Push-up', sets: 3, reps: 8 }] },
      { name: 'Runner Reset', focus: 'Mobility', difficulty: 'Intermediate', durationMinutes: 20, exercises: [{ name: 'World greatest stretch', sets: 2, reps: 6 }, { name: 'Calf raise', sets: 3, reps: 15 }] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
