import CollectionView from './CollectionView.jsx';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

export default function Leaderboard() {
  return <CollectionView endpoint={leaderboardEndpoint} title="Leaderboard" description="A friendly nudge from the people around you." renderItem={(entry) => <><span className="rank">#{entry.rank}</span><h2>{entry.user?.name ?? 'Athlete'}</h2><p>{entry.points} points</p><small>Keep showing up.</small></>} />;
}