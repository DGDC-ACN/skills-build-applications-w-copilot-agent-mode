import CollectionView from './CollectionView.jsx';

export default function Users() {
  return <CollectionView collection="users" title="Athletes" description="Your community of people building better routines." renderItem={(user) => <><span className="card-kicker">{user.profile}</span><h2>{user.name}</h2><p>@{user.username}</p><small>{user.email}</small></>} />;
}