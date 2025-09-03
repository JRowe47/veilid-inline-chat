import { init } from './wasm-embedded.js';
import { bootstrapProbe, attach, detach, peerStats } from './net.js';

console.log('App boot');

let handle;

init().then(async () => {
  console.log('Veilid initialized', window.veilid);
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
