import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./Home/Layout/HomeLayout";
import { HomeInventario } from "./Home/Inventario/Layout/HomeInventario";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>
    },
    {
        path:'/inventario',
        element:<HomeInventario/>
    },
])

export default router;