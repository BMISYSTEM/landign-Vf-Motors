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
import { ToastContainer } from "react-toastify"
import { Link } from "react-router-dom"

export const HomeLayout = () => {
  return (
    <HomeProviderContext>
      <div className="">
          <div className='fixed z-50 w-16 h-16 bottom-[5%] md:left-[92%] left-[80%] hover:scale-105 transition-all'>
              <Link to={'https://wa.me/message/IH5SZDTONQ5MK1'}>
                <img src={'/Imagenes/whatsapp.png'} alt="" className=' h-auto hover:cursor-pointer hover:animate-pulse' />
              </Link>
          </div>
          <div className='fixed z-50 w-16 bg-sky-800 flex justify-center rounded-full  items-center h-16 bottom-[15%] md:left-[92%] left-[80%] hover:scale-105 transition-all '>
              <Link to={'https://waze.com/ul?ll=3.397535343008182, -76.54328168393025&navigate=yes'} className="">
                <img src={'/Imagenes/waze.png'} alt="" className='w-full   h-auto hover:cursor-pointer hover:animate-pulse' />
              </Link>
          </div>
        {/* header */}
        <LayoutHeader/>
        {/* main */}
        {/* bg-[url('/Imagenes/cuadriculablancagrande.png')] */}
        <main className="  w-full h-full bg-slate-950  backdrop-blur-3xl overflow-hidden" >
       
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
        <ToastContainer/>
      </div>
    </HomeProviderContext>
  )
}
