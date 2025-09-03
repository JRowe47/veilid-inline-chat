export async function init() {
  const resp = await fetch('./veilid_wasm_bg.wasm');
  const { instance } = await WebAssembly.instantiateStreaming(resp, {});
  window.veilid = instance.exports;
  return window.veilid;
}
