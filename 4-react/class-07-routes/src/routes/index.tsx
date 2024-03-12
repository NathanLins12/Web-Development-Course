import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/home";
import { Gallery } from "../pages/gallery";
import { Contact } from "../pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
