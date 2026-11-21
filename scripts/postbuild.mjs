import { copyFileSync } from 'node:fs';

// GitHub Pages has no SPA rewrites — serve index.html for unknown routes
// so the custom 404 page (client-side) renders instead of the default 404.
copyFileSync('dist/index.html', 'dist/404.html');
console.log('postbuild: created dist/404.html (SPA fallback)');
