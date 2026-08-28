const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function collectionItems(payload) {
  if (Array.isArray(payload)) return payload;
  return payload?.results ?? payload?.items ?? payload?.data ?? [];
}

export async function fetchCollection(collection) {
  const response = await fetch(`${apiBaseUrl}/api/${collection}/`);
  if (!response.ok) throw new Error(`Unable to load ${collection}`);
  return collectionItems(await response.json());
}