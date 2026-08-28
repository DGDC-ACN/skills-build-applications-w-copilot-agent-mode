import CollectionView from './CollectionView.jsx';

export default function Teams() {
  return <CollectionView collection="teams" title="Teams" description="Find your people and keep momentum visible." renderItem={(team) => <><span className="card-kicker">Team</span><h2>{team.name}</h2><p>{team.description}</p><small>{team.members?.length ?? 0} members</small></>} />;
}