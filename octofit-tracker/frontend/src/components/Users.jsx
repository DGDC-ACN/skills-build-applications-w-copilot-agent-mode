import CollectionView from './CollectionView.jsx';

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

export default function Users() {
  return <CollectionView endpoint={usersEndpoint} title="Athletes" description="Your community of people building better routines." renderItem={(user) => <><span className="card-kicker">{user.profile}</span><h2>{user.name}</h2><p>@{user.username}</p><small>{user.email}</small></>} />;
}