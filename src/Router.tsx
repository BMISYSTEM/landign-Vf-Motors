import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./Home/Layout/HomeLayout";
import { HomeInventario } from "./Home/Inventario/Layout/HomeInventario";
import { InventarioVehiculoDetalle } from "./Home/Inventario/Components/InventarioVehiculoDetalle";
import { HomeNoticias } from "./Home/Noticias/views/HomeNoticias";
import { PanelLayout } from "./Panel/Layout/PanelLayout";
import { PanelBanner } from "./Panel/AdminHeader/views/PanelBanner";
import { PanelAdminMision } from "./Panel/AdminMision/views/PanelAdminMision";
import { PanelVision } from "./Panel/AdminVision/views/PanelVision";
import { PanelFototeca } from "./Panel/AdminFototeca/views/PanelFototeca";
import { PanleTestimonios } from "./Panel/AdminTestimonios/views/PanleTestimonios";
import { PanelContactenos } from "./Panel/AdminContactenos/views/PanelContactenos";
import { PanelNoticias } from "./Panel/AdminNoticias/views/PanelNoticias";
import { PanelDocumentos } from "./Panel/AdminDocumentos/views/PanelDocumentos";

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
        path:'/inventario/detalle/:id',
        element:<InventarioVehiculoDetalle/>
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
                path:'/panel/mision',
                element:<PanelAdminMision/>
            },
            {
                path:'/panel/banner',
                element:<PanelBanner/>
            },
            {
                path:'/panel/vision',
                element:<PanelVision/>
            },
            {
                path:'/panel/fototeca',
                element:<PanelFototeca/>
            },
            {
                path:'/panel/testimonios',
                element:<PanleTestimonios/>
            },
            {
                path:'/panel/contactos',
                element:<PanelContactenos/>
            },
            {
                path:'/panel/noticias',
                element:<PanelNoticias/>
            },
            {
                path:'/panel/documentos',
                element:<PanelDocumentos/>
            },
        ]
    },
    
])

export default router;