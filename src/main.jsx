import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./Layouts/RootLayout";
import axios from "axios";
import PlantDetails from "./Pages/PlantDetails";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/home",
        loader: () => axios('https://openapi.programming-hero.com/api/plants'),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: '/plant-details/:id',
        Component: PlantDetails,
        loader: ({params}) => axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
