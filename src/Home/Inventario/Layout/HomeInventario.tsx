import { Element } from "react-scroll";
import { Respuesta, useInventario } from "../Hooks/useInventario";

import stylos from "../css/inventario.module.css";
import { TarjetaVehiculo } from "../Components/TarjetasVehiculos/component/TarjetaVehiculo";
import { Imagenes } from "../Components/TarjetasVehiculos/component/Imagenes";
import { DatosVehiculo } from "../Components/TarjetasVehiculos/component/DatosVehiculo";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HomeInventario = () => {
  const { data, isLoading } = useInventario();
  const [busqueda, setBusqueda] = useState("");
  const [busquedaMarcas, setBusquedaMarca] = useState("");
  const [busquedaRango, setBusquedaRango] = useState({
    inicial: 0,
    final: 0,
  });
  if (isLoading) {
    return (
      <section className="w-full h-screen bg-slate-950 text-white">
        <p className="text-slate-300 text-2xl font-bold">Cargando inventario...</p>
      </section>
  );
  }
  let vehiculos: Respuesta = data?.data[0];
  // filtro busqueda
  if (busqueda.length > 0) {
    vehiculos = {
      ...vehiculos,
      succes: vehiculos.succes.filter(
        (vehiculo) =>
          vehiculo.placa
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          vehiculo.kilometraje
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          vehiculo.linea
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          vehiculo.version
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          vehiculo.marca_nombre
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          vehiculo.valor
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase())
      ),
    };
  }
  // filtro por marca
  if (busquedaMarcas.length > 0) {
    vehiculos = {
      ...vehiculos,
      succes: vehiculos.succes.filter((vehiculo) =>
        vehiculo.marca_nombre
          .toString()
          .toLowerCase()
          .includes(busquedaMarcas.toLowerCase())
      ),
    };
  }
  // filtro rango de precios
  if (busquedaRango.inicial > 0 && busquedaRango.final > 0) {
    vehiculos = {
      ...vehiculos,
      succes: vehiculos.succes.filter(
        (vehiculo) =>
          Number(vehiculo.valor) > busquedaRango.inicial &&
          Number(vehiculo.valor) < busquedaRango.final
      ),
    };
  }
  return (
    <Element name="inventario">
      <section className="w-full h-screen flex flex-col gap-5  overflow-hidden  bg-slate-950">
        <div className="w-full h-20  flex flex-row justify-between">
          {/* logo de la empresa */}
          <Link to={"/"} className="w-full">
            <img
              src="/Imagenes/logo.png"
              alt="Logo de la empresa"
              className="w-40 h-auto"
            />
          </Link>
          {/* buscador */}
          <div className="relative flex flex-row items-center p-2 w-1/3  ">
            {/* imagen */}
            <div className="absolute ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {/* input */}
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="p-2 w-full rounded-xl bg-[#1D2432] pl-7 text-slate-300"
              placeholder="Busca por maraca, precio, linea o version"
            />
          </div>
        </div>
        {/* inventario y filtros */}
        <section
          className={`${stylos.scroll} scroll w-full flex flex-row gap-5 p-5 justify-center overflow-auto`}
        >
          {/* filtros */}
          <div className="bg-[#1D2432] w-60 h-screen border-2 border-green-500 flex flex-col gap-3 rounded-lg p-2  ">
            <button
              onClick={() => {
                setBusqueda("");
                setBusquedaMarca("");
                setBusquedaRango({
                  inicial: 0,
                  final: 0,
                });
              }}
              className="p-2 text-lg font-bold text-white bg-[#6366F1] hover:bg-[#6366F1]/30 transition-all"
            >
              Borrar filtros
            </button>
            <h1 className={`text-2xl font-bold text-white`}>Marcas</h1>
            <button
              onClick={() => setBusquedaMarca("kia")}
              className={` ${busquedaMarcas === 'kia' ? 'bg-green-500 ': null} border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all`}
            >
              Kia
            </button>
            <button
              onClick={() => setBusquedaMarca("chevrolet")}
              className={` ${busquedaMarcas === 'chevrolet' ? 'bg-green-500 ': null} border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all`}
            >
              Chevrolet
            </button>
            <button
              onClick={() => setBusquedaMarca("mazda")}
              className={` ${busquedaMarcas === 'mazda' ? 'bg-green-500 ': null} border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all`}

            >
              Mazda
            </button>
            <button
              onClick={() => setBusquedaMarca("hiunday")}
              className={` ${busquedaMarcas === 'hiunday' ? 'bg-green-500 ': null} border-2 rounded-xl border-green-500 p-2 text-lg text-slate-200 font-bold hover:bg-green-500 transition-all`}
            >
              Hiunday
            </button>
            <h1 className="text-2xl font-bold text-white">Precios</h1>
            <button
              onClick={() =>
                setBusquedaRango({
                  inicial: 30000000,
                  final: 50000000,
                })
              }
              className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              30 a 50 millones
            </button>
            <button
              onClick={() =>
                setBusquedaRango({
                  inicial: 50000000,
                  final: 70000000,
                })
              }
              className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              50 a 70 millones
            </button>
            <button
              onClick={() =>
                setBusquedaRango({
                  inicial: 70000000,
                  final: 100000000,
                })
              }
              className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              70 a 100 millones
            </button>
            <button
              onClick={() =>
                setBusquedaRango({
                  inicial: 100000000,
                  final: 100000000000,
                })
              }
              className="border-2 rounded-xl border-sky-500 p-2 text-lg text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              mas de 100 millones.
            </button>
          </div>
          {/* resultado */}
          <div className="w-full h-auto grid grid-cols-3 gap-5 ">
            {vehiculos?.succes.map((vehiculo, index) => (
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
