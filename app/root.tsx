import { LiveReload } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix - CDS</title>
      </head>
      <body>
        Hello world...
        <LiveReload />
      </body>
    </html>
  );
}