const api = () => window.veilid || {};

export async function bootstrapProbe(opts = {}) {
  if (!api().bootstrap_probe) {
    console.warn('bootstrap_probe not available');
    return null;
  }
  try {
    return await api().bootstrap_probe(opts);
  } catch (err) {
    console.warn('Bootstrap probe failed', err);
    return null;
  }
}

export async function attach(opts = {}) {
  if (!api().attach) {
    console.warn('attach not available');
    return null;
  }
  return api().attach(opts);
}

export async function detach(handle) {
  if (api().detach && handle != null) {
    try {
      await api().detach(handle);
    } catch (err) {
      console.warn('Detach failed', err);
    }
  }
}

export async function peerStats() {
  if (!api().peer_stats) {
    return {};
  }
  try {
    return await api().peer_stats();
  } catch (err) {
    console.warn('peer_stats failed', err);
    return {};
  }
}
