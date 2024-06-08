import { Link, useParams } from "react-router-dom"
import {  useInventario } from "../Hooks/useInventario"
import 'animate.css'

import calendario from './TarjetasVehiculos/assets/calendario.png'
import marca from './TarjetasVehiculos/assets/vehiculo.png'
import transmision from './TarjetasVehiculos/assets/transmision.png'
import version from './TarjetasVehiculos/assets/version.png'
import kilometraje from './TarjetasVehiculos/assets/kilometraje.png'
import linea from './TarjetasVehiculos/assets/linea.png'
import soat from './TarjetasVehiculos/assets/soat.png'
import tecnomecanica from './TarjetasVehiculos/assets/tecnomecanica.png'
import { useState } from "react"

export interface Respuesta {
  succes: Succe[];
}

export interface Succe {
  id:             number;
  placa:          string;
  kilometraje:    string;
  foto1:          string;
  foto2:          string;
  foto3:          string;
  foto4:          string;
  created_at:     Date;
  updated_at:     Date;
  marcas:         number;
  modelos:        number;
  estados:        number;
  valor:          string;
  peritaje:       string;
  empresas:       number;
  disponibilidad: number;
  caja:           string;
  version:        string;
  linea:          string;
  soat:           string;
  tecnomecanica:  string | null;
  marca_nombre:   string;
  model_nombre:   string;
  estado_nombre:  string;
}






export const InventarioVehiculoDetalle = () => {
  const { data, isLoading } = useInventario();
  const [img,setimg] = useState(1)
    const {id} = useParams()

    if (isLoading) {
      return (
        <section className="w-full h-screen bg-slate-950 text-white">
          <p className="text-slate-300 text-2xl font-bold">
            Cargando inventario...
          </p>
        </section>
      );
    }
    let vehiculos: Respuesta = data?.data[0];
     // filtro busqueda

    vehiculos = {
      ...vehiculos,
      succes: vehiculos.succes.filter(
        (vehiculo) => Number(vehiculo.id) === Number(id)
      ),
    };
  return (
    <section className="w-full md:h-screen h-full bg-slate-950  flex md:flex-row flex-col md:overflow-hidden ">
        <section className="md:w-1/3 w-full flex flex-col gap-3 p-4  h-full overflow-auto justify-center ">
          <div className="w-full h-full  flex flex-col ">
            <img src="/Imagenes/logo.png" alt="" className="w-40 "/>
            <Link to={'/inventario'} className="w-full flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-500">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
              </svg>
              <p className="text-lg font-bold text-sky-600">Volver al listado</p>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-slate-300 ">{vehiculos?.succes[0].marca_nombre} {vehiculos?.succes[0].version}</h1>
          <h2 className="text-3xl font-bold text-slate-300 ">{vehiculos?.succes[0].model_nombre}</h2>
          <h3 className="text-2xl font-bold text-red-500  ">{Number(vehiculos?.succes[0].valor).toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'COP',
                })}</h3>
          <p className="text-xl font-bold text-slate-200 ">Especificaciones</p>
          <div className="w-full flex flex-row gap-5 items-center justify-center">
            {/* columna 1 */}
              <div className="w-1/2 h-full flex flex-col gap-5 p-2 justify-center items-center">
                <div className="w-full  flex flex-row items-center gap-2 ">
                  <img src={marca} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Marca</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].marca_nombre}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={calendario} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Modelo</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].model_nombre}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={version} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-slate-200">Versión</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].version}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={kilometraje} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-slate-200">Kilometraje</p>
                    <p  className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].kilometraje}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={transmision} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Caja</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].caja}</p>
                  </div>
                </div>
              </div>
            {/* columna 2 */}
            <div className="w-1/2 h-full flex flex-col gap-5 p-2 ">
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={linea} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Linea</p>
                    <p  className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].linea}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={soat} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Soat</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].tecnomecanica  ? (vehiculos?.succes[0].soat) : '---'}</p>
                  </div>
                </div>
                <div className="w-full  flex flex-row items-center gap-2">
                  <img src={tecnomecanica} alt="" className="object-contain w-8 h-8" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-slate-200">Tecnomecanica</p>
                    <p className="text-sm font-bold text-slate-400">{vehiculos?.succes[0].tecnomecanica  ? ( vehiculos.succes[0].tecnomecanica) : '--'}</p>
                  </div>
                </div>
              </div>
          </div>
                {/* contacto de asesor */}
                <div className="w-full h-full">
                  {/* texto */}
                  <div className="w-full">
                    <p className="text-2xl font-bold text-white">Contacte un asesor</p>
                    <p className="text-sm text-slate-400">Selecciona la opcion de preferencia para que un asesor se comunique con usted</p>
                  </div>
                  <button className="text-white bg-green-600 p-2 font-bold w-full">
                    WHATSAPP
                  </button>
                </div>
        </section>
        <section className="md:w-2/3 w-full h-full flex flex-col   relative">
            <div className="w-full h-full ">
                <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto1} alt=""  className={`${img === 1 ? 'animate__animated animate__fadeIn' : 'hidden'}`}/>
                <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto2} alt=""  className={`${img === 2 ? 'animate__animated animate__fadeIn' : 'hidden'}`}/>
                <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto3} alt=""  className={`${img === 3 ? 'animate__animated animate__fadeIn' : 'hidden'}`}/>
                <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto4} alt=""  className={`${img === 4 ? 'animate__animated animate__fadeIn' : 'hidden'}`}/>
            </div>
            {/* super pocicion */}
            <div className="absolute w-full h-full bg-black/40 z-50 flex items-end ">
                {/* carrusel de imagenes disponibles */}
                <div className="w-full h-40  flex bg-black/30 justify-center gap-4 backdrop-blur-sm ">
                  <button onClick={()=>setimg(1)} className=" w-40 h-40 flex flex-row gap-4 items-center ">
                    <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto1} alt="" className="w-full h-[90%] object-fill bg-red-500" />
                  </button>
                  <button onClick={()=>setimg(2)} className=" w-40 h-40 flex flex-row gap-4 items-center ">
                    <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto2} alt="" className="w-full h-[90%] object-fill bg-red-500" />
                  </button>
                  <button onClick={()=>setimg(3)} className=" w-40 h-40 flex flex-row gap-4 items-center ">
                    <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto3} alt="" className="w-full h-[90%] object-fill bg-red-500" />
                  </button>
                  <button onClick={()=>setimg(4)} className=" w-40 h-40 flex flex-row gap-4 items-center ">
                    <img src={"https://public.cartmots.com" + vehiculos?.succes[0].foto4} alt="" className="w-full h-[90%] object-fill bg-red-500" />
                  </button>
                </div>
            </div>
        </section>
    </section>
  )
}
