import CollectionView from './CollectionView.jsx';

export default function Activities() {
  return <CollectionView collection="activities" title="Activity log" description="Every session counts toward the bigger picture." renderItem={(activity) => <><span className="card-kicker">{activity.type}</span><h2>{activity.durationMinutes} minutes</h2><p>{activity.calories} calories · {activity.user?.name ?? 'OctoFit athlete'}</p><small>{new Date(activity.completedAt).toLocaleDateString()}</small></>} />;
}