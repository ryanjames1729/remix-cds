import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export function ErrorBoundary() {
  return (
    <div className="error-container">
      I did a whoopsies.
    </div>
  );
}

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>CDS!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">CDS...spill the tea</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}