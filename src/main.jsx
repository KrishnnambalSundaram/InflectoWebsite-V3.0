import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Partnerships from "./pages/Partnerships";
import ContactUs from "./pages/ContactUs";
import DAILabs from "./pages/DAILabs";
import Blog from "./pages/Blog";
import BlogVisit from "./pages/BlogVisit";
import { ToastContainer } from 'react-toastify';
import {ReactLenis} from './utils/lenis'
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dailabs", element: <DAILabs/>},
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/partnerships", element: <Partnerships /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/comingsoon", element: <ComingSoon /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/blog", element: <Blog />},
      {path: "blog/blogvisit/:blogName", element: <BlogVisit />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        theme="colored"
      />
    </ReactLenis>
  </StrictMode>
);
