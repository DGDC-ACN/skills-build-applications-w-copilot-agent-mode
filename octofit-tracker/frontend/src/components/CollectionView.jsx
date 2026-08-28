import { useEffect, useState } from 'react';
import { fetchEndpoint } from '../api.js';

export default function CollectionView({ endpoint, title, description, renderItem }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEndpoint(endpoint).then(setItems).catch((loadError) => setError(loadError.message));
  }, [endpoint]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <div><p className="eyebrow">OctoFit Tracker</p><h1>{title}</h1><p>{description}</p></div>
        <span className="count-badge">{items.length} records</span>
      </div>
      {error ? <div className="alert alert-warning">{error}. Check that the API is running on port 8000.</div> : null}
      {!error && !items.length ? <div className="empty-state">No records available yet.</div> : null}
      <div className="collection-grid">{items.map((item, index) => <article className="data-card" key={item._id ?? index}>{renderItem(item)}</article>)}</div>
    </section>
  );
}