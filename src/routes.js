import {createBrowserRouter} from "react-router-dom";
import App from "./App";

const webRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    // {
    //     path: "/about",
    //     element: <About/>,
    // },
]);

export {webRoutes};