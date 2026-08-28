import CollectionView from './CollectionView.jsx';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

export default function Activities() {
  return <CollectionView endpoint={activitiesEndpoint} title="Activity log" description="Every session counts toward the bigger picture." renderItem={(activity) => <><span className="card-kicker">{activity.type}</span><h2>{activity.durationMinutes} minutes</h2><p>{activity.calories} calories · {activity.user?.name ?? 'OctoFit athlete'}</p><small>{new Date(activity.completedAt).toLocaleDateString()}</small></>} />;
}