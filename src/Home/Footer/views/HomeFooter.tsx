import { Link } from "react-scroll"

export const HomeFooter = () => {
  return (
    <section className="w-full h-auto bg-slate-950 flex flex-col mt-10 p-5 ">
        {/* redes sociales */}
        <div className="w-full h-auto flex  justify-center ">
            <div className="w-1/2 flex flex-row gap-2   justify-center">
                <a href="" className="hover:animate-pulse">
                    <img src={'/Imagenes/instagram.png'} alt="Icono de instagram" className="w-12 h-12" />
                </a>
                <a href="" className="hover:animate-pulse">
                    <img src={'/Imagenes/facebook.png'} alt="Icono de facebook" className="w-12 h-12" />
                </a>
                <a href="" className="hover:animate-pulse">
                    <img src={'/Imagenes/whatsapp.png'} alt="Icono de whatsapp" className="w-12 h-12" />
                </a>
            </div>
        </div>
        {/* enlaces  */}
        <div className="w-full h-full flex flex-row gap-2 justify-center mt-10">
            <div className="w-1/3 flex flex-col gap-2">
                <p className="text-2xl font-bold text-slate-300">Enlaces Relevantes</p>
                <Link to="quienes" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Nosotros</p>
                </Link>
                <Link to="mision" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Mision</p>
                </Link>
                <Link to="vision" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Vision</p>
                </Link>
                <Link to="fototeca" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Fototeca</p>
                </Link>
                <Link to="servicios" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Servicios</p>
                </Link>
                <Link to="inventario" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Inventario</p>
                </Link>
                <Link to="contactenos" smooth={true} duration={700} className="p-2 cursor-pointer hover:border-b-2 hover:border-green-500">
                    <p className="text-slate-300 text-xl">Contactenos</p>
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold text-slate-300">Correos Autorizados</p>
                <p className="text-slate-300">Correo@Correo.com</p>
                <p className="text-slate-300">Correo@Correo.com</p>
                <p className="text-2xl font-bold text-slate-300">Horarios de atencion</p>
                <p className="text-slate-300">08:00-18:00</p>
                <p className="text-slate-300">cr56g7671</p>
            </div>
        </div>
        <p className="text-slate-300 text-center">Todos los derechos recerbados@</p>
    </section>
  )
}
