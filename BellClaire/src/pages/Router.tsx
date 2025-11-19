import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import Made from "./Made/Made";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "made",
            element: <Made/>
        },
    ]);

    return <RouterProvider router={router}/>;
};

export default Router;