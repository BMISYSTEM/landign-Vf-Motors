import { Element } from "react-scroll";
import { Respuesta, useInventario } from "../Hooks/useInventario";
import { useEffect, useState } from "react";

import stylos from '../css/inventario.module.css'
import { TarjetaVehiculo } from "../Components/TarjetasVehiculos/component/TarjetaVehiculo";
import { Imagenes } from "../Components/TarjetasVehiculos/component/Imagenes";
import { DatosVehiculo } from "../Components/TarjetasVehiculos/component/DatosVehiculo";

export const HomeInventario = () => {
  const { allVehiculo,loading } = useInventario();
  const [vehiculos, setVehiculos] = useState<Respuesta>();
  if(loading){
    return (
    <p>Cargando inventario...</p>
    )
  }
  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const respuesta = await allVehiculo();
        setVehiculos(respuesta);
      } catch (error) {
        console.error("Error obteniendo vehículos:", error);
      }
    };
    fetchVehiculos();
  }, []);

  return (
    <Element name="inventario">
      <section className="w-full h-screen flex flex-col gap-5 p-5 overflow-hidden ">
        <h5 className="text-3xl font-bold text-white text-center">
          Inventario
        </h5>
        {/* inventario y filtros */}
        <section className={`${stylos.scroll} scroll w-full flex flex-row gap-5 p-5 justify-center overflow-auto`}>
          {/* filtros */}
          <div className="bg-[#1D2432] w-60 h-screen border-2 border-green-500 flex flex-col gap-3 rounded-lg p-2  ">
                <button className="p-2 text-lg font-bold text-white bg-[#6366F1] hover:bg-[#6366F1]/30 transition-all">
                    Borrar filtros
                </button>
                 <h1 className="text-2xl font-bold text-white">Marcas</h1>
                <button className="border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all">
                    Kia
                </button>
                <button className="border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all">
                    Chevrolet
                </button>
                <button className="border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all">
                    Mazda
                </button>
                <button className="border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all">
                    Hiunday
                </button>
                <h1 className="text-2xl font-bold text-white">Precios</h1>
                <button className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all">
                    30 a 50 millones
                </button>
                <button className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all">
                    50 a 70 millones
                </button>
                <button className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all">
                    70 a 100 millones
                </button>
                <button className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all">
                    mas de 100 millones.
                </button>
          </div>
          {/* resultado */}
          <div className="w-full h-auto grid grid-cols-3 gap-5 ">
            {vehiculos?.succes.map((vehiculo,index) => (
              <TarjetaVehiculo key={index}>
                <Imagenes
                  foto1={"https://public.cartmots.com" + vehiculo.foto1}
                  foto2={"https://public.cartmots.com" + vehiculo.foto2}
                  foto3={"https://public.cartmots.com" + vehiculo.foto3}
                  foto4={"https://public.cartmots.com" + vehiculo.foto4}
                />
                <DatosVehiculo
                  caja={vehiculo.caja}
                  linea={vehiculo.linea}
                  marca={vehiculo.marca_nombre}
                  modelo={vehiculo.model_nombre}
                  placa={vehiculo.placa}
                  valor={vehiculo.valor}
                  version={vehiculo.version}
                />
              </TarjetaVehiculo>
            ))}
          </div>
        </section>
      </section>
    </Element>
  );
};
