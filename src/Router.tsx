import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./Home/Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>
    },
])

export default router;