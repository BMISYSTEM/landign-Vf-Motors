import { Element } from "react-scroll";
import { Respuesta, useInventario } from "../Hooks/useInventario";

import stylos from "../css/inventario.module.css";
import { TarjetaVehiculo } from "../Components/TarjetasVehiculos/component/TarjetaVehiculo";
import { Imagenes } from "../Components/TarjetasVehiculos/component/Imagenes";
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
  const [expanFiltros, setexpanFiltros] = useState(false);
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
  // Primero, crea un conjunto (Set) para almacenar marcas únicas
  const marcasUnicas = new Set<string>();

  // Llena el conjunto con marcas únicas
  vehiculos?.succes.forEach((vehiculo) => {
    marcasUnicas.add(vehiculo.marca_nombre);
  });
  // Luego, convierte el conjunto en un array para poder mapearlo
  const marcasUnicasArray = Array.from(marcasUnicas);
  return (
    <Element name="inventario">
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
          <div className="relative w-full flex flex-row items-center p-2 md:w-1/3  ">
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
          className={`${stylos.scroll} scroll w-full flex md:flex-row flex-col gap-5 p-5 md:justify-center overflow-auto`}
        >
          {/* filtros */}
          <div className="md:hidden flex w-full">
            <button
              className="border p-2 rounded-full bg-green-500"
              onClick={() => setexpanFiltros(!expanFiltros)}
            >
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              expanFiltros ? "flex" : "hidden md:flex"
            } bg-[#1D2432] md:w-60 w-full md:h-auto h-[50rem] md:overflow-hidden border-2 border-green-500  flex-col gap-3 rounded-lg p-2  `}
          >
            <button
              onClick={() => {
                setBusqueda("");
                setBusquedaMarca("");
                setBusquedaRango({
                  inicial: 0,
                  final: 0,
                });
              }}
              className="p-2 md:text-lg text-sm font-bold text-white bg-[#6366F1] hover:bg-[#6366F1]/30 transition-all"
            >
              Borrar filtros
            </button>
            <h1 className="md:text-2xl text-lg font-bold text-white">
              Tipo de vehiculo
            </h1>
            <button
              onClick={() =>
                setBusqueda('hibrido')
              }
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              Hibrido
            </button>
            <button
              onClick={() =>
                setBusqueda('electrico')
              }
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              Electrico
            </button>
            <h1 className="md:text-2xl text-lg font-bold text-white">
              Precios
            </h1>
            <button
              onClick={() =>
                setBusquedaRango({
                  inicial: 30000000,
                  final: 50000000,
                })
              }
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
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
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
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
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
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
              className="border-2 rounded-xl border-sky-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-sky-500 transition-all"
            >
              mas de 100 millones.
            </button>
            {/* --------------------------------------------------------------------------- */}
            <h1 className={`text-2xl font-bold text-white`}>Marcas</h1>
            {marcasUnicasArray.map((marca, index) => (
              <button
              key={index}
              onClick={() => setBusquedaMarca(marca)}
              className={` ${busquedaMarcas === marca ? 'bg-green-500 ': null} border-2 rounded-xl border-green-500 p-2 md:text-lg text-sm text-slate-200 font-bold hover:bg-green-500 transition-all`}
              >
                {marca}
              </button>
            ))}
          </div>
          {/* resultado */}
          <div className="w-full h-auto grid md:grid-cols-3 grid-cols-2 gap-5 ">
            {vehiculos?.succes.map((vehiculo, index) =>
              vehiculo.disponibilidad ? (
                <TarjetaVehiculo key={index}>
                  <Imagenes
                    id={vehiculo.id}
                    foto1={"https://public.cartmots.com" + vehiculo.foto1}
                    foto2={"https://public.cartmots.com" + vehiculo.foto2}
                    foto3={"https://public.cartmots.com" + vehiculo.foto3}
                    foto4={"https://public.cartmots.com" + vehiculo.foto4}
                    caja={vehiculo.caja}
                    linea={vehiculo.linea}
                    marca={vehiculo.marca_nombre}
                    modelo={vehiculo.model_nombre}
                    placa={vehiculo.placa}
                    valor={vehiculo.valor}
                    version={vehiculo.version}
                    kilometraje={vehiculo.kilometraje}
                  />

                </TarjetaVehiculo>
              ) : null
            )}
          </div>
        </section>
      </section>
    </Element>
  );
};
