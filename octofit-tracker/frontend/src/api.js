const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
const browserHost = typeof window !== 'undefined' ? window.location.hostname : '';
const forwardedApiHost = browserHost.replace('-5173.app.github.dev', '-8000.app.github.dev');

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : forwardedApiHost !== browserHost
    ? `https://${forwardedApiHost}`
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

export async function fetchEndpoint(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Unable to load ${endpoint}`);
  return collectionItems(await response.json());
}