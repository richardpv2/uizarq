import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./styles/index.css";

// Layout
import AppLayout from "./AppLayout";

// Rutas
import Error404 from "./routes/Error404";
import Home from "./routes/Home";
import Prices from "./routes/Prices";
import AboutUs from "./routes/AboutUs";
import Contact from "./routes/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
