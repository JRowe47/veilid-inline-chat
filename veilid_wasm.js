export async function init() {
  const resp = await fetch('./veilid_wasm_bg.wasm');
  const bytes = await resp.arrayBuffer();
  const mod = new WebAssembly.Module(bytes);
  const imports = { wbg: {} };
  for (const imp of WebAssembly.Module.imports(mod)) {
    if (imp.module === 'wbg') {
      imports.wbg[imp.name] = () => {};
    }
  }
  const instance = new WebAssembly.Instance(mod, imports);
  window.veilid = instance.exports;
  return window.veilid;
}
