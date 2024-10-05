import React from "react";

export const RouterDevtools =
  import.meta.env.VITE_NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((d) => {
          return {
            default: d.TanStackRouterDevtools,
          };
        })
      );
