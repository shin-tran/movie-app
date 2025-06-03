import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "@pages/HomePage.jsx";
import MovieDetail from "@pages/MovieDetail.jsx";
import RootLayout from "@pages/RootLayout.jsx";
import TVShowDetail from "@pages/TVShowDetail";
import ModalProvider from "@context/ModalProvider";
import PeoplePage from "@pages/PeoplePage";
import Loading from "@components/Loading";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:id", element: <MovieDetail /> },
      { path: "/tv/:id", element: <TVShowDetail /> },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
              },
            },
          );
          return res.json();
        },
        HydrateFallback: () => <Loading />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>,
);
