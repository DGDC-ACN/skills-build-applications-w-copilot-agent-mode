import CollectionView from './CollectionView.jsx';

export default function Leaderboard() {
  return <CollectionView collection="leaderboard" title="Leaderboard" description="A friendly nudge from the people around you." renderItem={(entry) => <><span className="rank">#{entry.rank}</span><h2>{entry.user?.name ?? 'Athlete'}</h2><p>{entry.points} points</p><small>Keep showing up.</small></>} />;
}