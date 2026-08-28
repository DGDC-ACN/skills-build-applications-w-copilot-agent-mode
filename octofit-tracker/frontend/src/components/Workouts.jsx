import CollectionView from './CollectionView.jsx';

export default function Workouts() {
  return <CollectionView collection="workouts" title="Workouts" description="Practical sessions for wherever you are today." renderItem={(workout) => <><span className="card-kicker">{workout.focus} · {workout.difficulty}</span><h2>{workout.name}</h2><p>{workout.durationMinutes} minute session</p><small>{workout.exercises?.length ?? 0} exercises</small></>} />;
}