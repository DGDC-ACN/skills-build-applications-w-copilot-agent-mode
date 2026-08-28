import CollectionView from './CollectionView.jsx';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

export default function Workouts() {
  return <CollectionView endpoint={workoutsEndpoint} title="Workouts" description="Practical sessions for wherever you are today." renderItem={(workout) => <><span className="card-kicker">{workout.focus} · {workout.difficulty}</span><h2>{workout.name}</h2><p>{workout.durationMinutes} minute session</p><small>{workout.exercises?.length ?? 0} exercises</small></>} />;
}