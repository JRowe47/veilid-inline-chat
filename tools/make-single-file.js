import { readFile, writeFile, mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';

async function bundle(entry) {
  const visited = new Set();

  async function load(file) {
    file = resolve(file);
    if (visited.has(file)) return '';
    visited.add(file);

    let code = await readFile(file, 'utf8');
    const dir = dirname(file);
    const importRE = /^import\s+[^'"`]+['"]([^'"`]+)['"];?\n?/gm;
    const deps = [];
    code = code.replace(importRE, (_m, spec) => {
      if (spec.startsWith('.')) {
        deps.push(resolve(dir, spec));
        return '';
      }
      return _m;
    });

    code = code.replace(/^export\s+(?:default\s+)?/gm, '');

    let out = '';
    for (const dep of deps) {
      out += await load(dep);
    }
    out += '\n' + code;
    return out;
  }

  return load(entry);
}

await mkdir('dist', { recursive: true });
const template = await readFile('public/index.template.html', 'utf8');
const bundled = await bundle('src/app.js');
const scriptTag = '<script type="module" src="../src/app.js"></script>';
const html = template.replace(scriptTag, `<script type="module">\n${bundled}\n</script>`);
await writeFile('dist/index.html', html);
console.log('Wrote dist/index.html');

