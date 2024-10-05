import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routing";
import "./App.css";

function App() {
  return (
    <>
      <Content />
    </>
  );
}

function Content() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
