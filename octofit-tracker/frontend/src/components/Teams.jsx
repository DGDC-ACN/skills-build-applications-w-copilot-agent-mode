import CollectionView from './CollectionView.jsx';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

export default function Teams() {
  return <CollectionView endpoint={teamsEndpoint} title="Teams" description="Find your people and keep momentum visible." renderItem={(team) => <><span className="card-kicker">Team</span><h2>{team.name}</h2><p>{team.description}</p><small>{team.members?.length ?? 0} members</small></>} />;
}