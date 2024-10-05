import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import { ExperimentSection } from "./modules/sections/experiments/experiments";
// import { RouterDevtools } from "./RouterDevtools";
// import { Suspense } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      {/* <Suspense fallback={null}>
        <RouterDevtools />
      </Suspense> */}
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <>
        <Hero />
        <ExperimentSection />
        <Footer />
      </>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});
const experimentRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/experiment/$id",
  component: function About() {
    const { id } = experimentRoute.useParams();
    return <div className="p-2">Hello from Experiment {id}!</div>;
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  experimentRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
