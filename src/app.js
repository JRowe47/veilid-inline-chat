import { init } from './wasm-embedded.js';
import { bootstrapProbe, attach, detach, peerStats } from './net.js';
import { loadIdentity, saveIdentity } from './store.js';

console.log('App boot');

let handle;

init().then(async () => {
  console.log('Veilid initialized', window.veilid);
  let identity = loadIdentity();
  if (!identity) {
    identity = crypto.randomUUID();
    saveIdentity(identity);
  }
  console.log('Identity', identity);
  await bootstrapProbe();
  handle = await attach();
  const stats = await peerStats();
  console.log('Peer stats', stats);
}).catch(err => {
  console.error('Veilid init failed', err);
});

window.addEventListener('beforeunload', () => {
  detach(handle);
});
