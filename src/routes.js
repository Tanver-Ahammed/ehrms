import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Home from "./pages/home";
import Features from "./pages/features";

const webRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/features",
        element: <Features />,
    },
    // {
    //     path: "/about",
    //     element: <About />,
    // },
]);

export { webRoutes };