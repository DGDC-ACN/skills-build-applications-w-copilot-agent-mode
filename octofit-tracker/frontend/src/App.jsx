import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import './App.css';

const navigation = [['/', 'Overview'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'], ['/teams', 'Teams'], ['/users', 'Athletes'], ['/workouts', 'Workouts']];

function Overview() {
  return <section className="overview"><p className="eyebrow">Daily movement, made social</p><h1>Build your<br /><em>stronger week.</em></h1><p className="intro">Track the work, celebrate the wins, and find your next good session.</p><NavLink className="primary-action" to="/activities">View activity <span>→</span></NavLink></section>;
}

export default function App() {
  return <div className="app-shell"><header className="topbar"><NavLink className="brand" to="/"><span className="brand-mark">O</span><span>OctoFit</span></NavLink><nav>{navigation.map(([path, label]) => <NavLink key={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={path}>{label}</NavLink>)}</nav></header><main><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main><footer><span>OCTOFIT TRACKER</span><span>Move with intention.</span></footer></div>;
}