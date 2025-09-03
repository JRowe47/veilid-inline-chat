import { init } from '../veilid_wasm.js';

console.log('App boot');

init().then(() => {
  console.log('Veilid initialized', window.veilid);
}).catch(err => {
  console.error('Veilid init failed', err);
});
