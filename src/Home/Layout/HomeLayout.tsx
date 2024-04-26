import { HomeContacto } from "../Contacto/layout/HomeContacto"
import { HomeFooter } from "../Footer/views/HomeFooter"
import { HomeFototeca } from "../Fototeca/Layout/HomeFototeca"
import {  LayoutHeader } from "../Header/LayoutHeader"
import { HomeMision } from "../Mision/Layout/HomeMision"
import { HomeQuienesSomos } from "../QuienesSomos/Layout/HomeQuienesSomos"
import { HomeServicios } from "../Servicios/Layout/HomeServicios"
import { HomeTestimonio } from "../Testimonios/Layout/HomeTestimonio"
import { HomeUbicacion } from "../UbicacionMapa/layouts/HomeUbicacion"
import { HomeVision } from "../Vision/Layout/HomeVision"
import { HomeProviderContext } from "../Context/HomeContext"
import { HomeModales } from "../Modales/HomeModales"

export const HomeLayout = () => {
  return (
    <HomeProviderContext>

        {/* header */}
        <LayoutHeader/>
        {/* main */}
        {/* bg-[url('/Imagenes/cuadriculablancagrande.png')] */}
        <main className="w-full h-full bg-slate-950  backdrop-blur-3xl overflow-hidden" >
        {/* Quienes somos */}
          <HomeQuienesSomos/>
          {/* mission */}
          <HomeMision/>
          {/* vision */}
          <HomeVision/>
          {/* Fototeca */}
          <HomeFototeca/>
          {/* testimonios */}
          <HomeTestimonio/>
          {/* servicios */}
          <HomeServicios/>
          {/* contacno */}
          <HomeContacto/>
          {/* Ubicacion */}
          <HomeUbicacion/>
          {/* footer */}
        </main>
        {/* footer */}
          <HomeFooter/>
          <HomeModales/>
    </HomeProviderContext>
  )
}
