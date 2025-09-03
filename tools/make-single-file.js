// placeholder single-file builder
import { readFile, writeFile, mkdir } from 'fs/promises';

await mkdir('dist', { recursive: true });
const template = await readFile('public/index.template.html', 'utf8');
await writeFile('dist/index.html', template);
console.log('Wrote dist/index.html (placeholder)');
