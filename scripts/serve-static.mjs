import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const outputRoot = resolve("out");
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

createServer((request, response) => {
  const requestTarget = (request.url || "/").replace(/^\/+/, "/");
  const pathname = decodeURIComponent(new URL(requestTarget, "http://local").pathname);
  let safePath = normalize(pathname).replace(/^([/\\])+/, "");

  // Next static exports request RSC payloads with a flattened final separator,
  // e.g. /portfolio/__next.portfolio.__PAGE__.txt. Map that request back to the
  // generated /portfolio/__next.portfolio/__PAGE__.txt file.
  safePath = safePath.replace(
    /(^|[\\/])(__next\.[^\\/]+)\.(__[^\\/]+__\.txt)$/,
    "$1$2/$3",
  );
  let filePath = join(outputRoot, safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  } else if (!existsSync(filePath) && existsSync(`${filePath}.html`)) {
    filePath = `${filePath}.html`;
  }

  if (!filePath.startsWith(outputRoot) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": extname(filePath) === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Production preview running at http://127.0.0.1:${port}`);
});
