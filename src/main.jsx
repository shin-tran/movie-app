import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/movie", element: <MovieDetail /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </StrictMode>,
);
