import { HomeFototeca } from "../Fototeca/Layout/HomeFototeca"
import {  LayoutHeader } from "../Header/LayoutHeader"
import { HomeInventario } from "../Inventario/Layout/HomeInventario"
import { HomeMision } from "../Mision/Layout/HomeMision"
import { HomeQuienesSomos } from "../QuienesSomos/Layout/HomeQuienesSomos"
import { HomeServicios } from "../Servicios/Layout/HomeServicios"
import { HomeTestimonio } from "../Testimonios/Layout/HomeTestimonio"
import { HomeVision } from "../Vision/Layout/HomeVision"

export const HomeLayout = () => {
  return (
    <>
        {/* header */}
        <LayoutHeader/>
        {/* main */}
        <main className="w-full h-full bg-gray-950 bg-[url(./Imagenes/cuadricula.png)] bg-contain">
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
          {/* Inventario */}
          <HomeInventario/>
        </main>
        {/* footer */}
    </>
  )
}
