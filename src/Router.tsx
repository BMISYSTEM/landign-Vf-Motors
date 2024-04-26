import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./Home/Layout/HomeLayout";
import { HomeInventario } from "./Home/Inventario/Layout/HomeInventario";
import { HomeNoticias } from "./Home/Noticias/views/HomeNoticias";
import { PanelLayout } from "./Panel/Layout/PanelLayout";
import { PanelAdminMision } from "./Panel/AdminMision/layout/PanelAdminMision";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>
    },
    {
        path:'/inventario',
        element:<HomeInventario/>
    },
    {
        path:'/noticias',
        element:<HomeNoticias/>
    },
    {
        path:'/panel',
        element:<PanelLayout/>,
        children:[
            {
                path:'/panel/adminmision',
                element:<PanelAdminMision/>
            }
        ]
    },
    
])

export default router;