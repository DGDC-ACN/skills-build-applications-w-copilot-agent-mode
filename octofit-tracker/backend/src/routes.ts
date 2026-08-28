import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

export const router = Router();

router.get('/users/', async (_request, response) => response.json(await User.find().sort({ name: 1 })));
router.get('/teams/', async (_request, response) => response.json(await Team.find().populate('members', 'name username')));
router.get('/activities/', async (_request, response) => response.json(await Activity.find().populate('user', 'name username').sort({ completedAt: -1 })));
router.get('/leaderboard/', async (_request, response) => response.json(await Leaderboard.find().populate('user', 'name username').sort({ rank: 1 })));
router.get('/workouts/', async (_request, response) => response.json(await Workout.find().sort({ difficulty: 1, name: 1 })));