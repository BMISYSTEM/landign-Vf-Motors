import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
interface expands {
  option: number;
}
export interface Data {
  succes: Succe[];
}

export interface Succe {
  id: number;
  imagen: string;
  seccion: number;
  created_at: Date;
  updated_at: Date;
}
export const HomeFototeca = () => {
  const url = import.meta.env.VITE_API_URL;
  const urlimagen = import.meta.env.VITE_API_URL_IMAGE;
  const [imagenVisible, setImagenVisible] = useState<number>(1);
  const [opcion, setOpcion] = useState<expands>({ option: 1 });

  //   consultar todas
  const { data, isLoading } = useSWR(`${url}/fototeca`, () =>
    axios.get(`${url}/fototeca`)
  );
  if (isLoading) {
    return <p>Cargando</p>;
  }
  let lista: Data = data?.data;
  lista = lista = {
    ...lista,
    succes: lista?.succes?.filter(
      (imagenes) => imagenes.seccion === opcion.option
    ),
  };
  return (
    <Element name="fototeca">
      <p className="text-2xl font-bold text-slate-300 text-center">Conoce nuestra empresa</p>
      <section className=" bg-gray-950 shadow-2xl shadow-black w-full h-auto flex md:flex-row flex-col gap-5 p-10 justify-between md:items-start items-center overflow-hidden">
        {/* opciones */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-2/3 flex flex-col gap-4"
        >
          <div 
          className={`${opcion.option === 1 ? 'bg-green-500 ' : null} w-full flex h-auto flex-col  bg-[#1D2432] p-4 items-center justify-between`}>
            <div  onClick={() => {
                  if (opcion.option === 1) {
                    setOpcion({ option: 1 });
                  } else {
                    setOpcion({ option: 1 });
                  }
                  setImagenVisible(1);
                }} className="w-full flex flex-row gap-2 justify-between cursor-pointer">
              <p className="md:text-3xl text-lg font-bold text-white flex">
                Personal
              </p>
              <button
               
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6 font-bold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${opcion.option === 2 ? 'bg-green-500 ' : null} w-full flex h-auto flex-col  bg-[#1D2432] p-4 items-center justify-between`}>
            <div onClick={() => {
                  if (opcion.option === 2) {
                    setOpcion({ option: 1 });
                  } else {
                    setOpcion({ option: 2 });
                  }
                  setImagenVisible(1);
                }} className="w-full flex flex-row gap-2 justify-between cursor-pointer">
              <p className="md:text-3xl text-lg font-bold text-white flex">
                Instalaciones
              </p>
              <button
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6 font-bold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div  className={`${opcion.option === 3 ? 'bg-green-500 ' : null} w-full flex h-auto flex-col  bg-[#1D2432] p-4 items-center justify-between`}>
            <div onClick={() => {
                  if (opcion.option === 3) {
                    setOpcion({ option: 1 });
                  } else {
                    setOpcion({ option: 3 });
                  }
                  setImagenVisible(1);
                }} className="w-full flex flex-row gap-2 justify-between cursor-pointer">
              <p className="md:text-3xl text-lg font-bold text-white flex">
                Entregas
              </p>
              <button
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6 font-bold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
        {/* fotos */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full h-full flex flex-col rounded-xl gap-5 items-center justify-center"
        >
          <div className="w-full h-96 flex flex-col">
            <p className="text-xl font-bold text-slate-200 text-center">
              {opcion.option === 1
                ? "Personal"
                : opcion.option === 2
                ? "Instalaciones"
                : opcion.option === 3
                ? "Entregas"
                : null}
            </p>
            {/* fotos solo se vera la que este en el estado */}
            {lista?.succes?.map((image, index) =>
              image.seccion === opcion.option ? (
                <img
                  src={`${urlimagen}${image.imagen}`}
                  alt="Imagen "
                  className={`${
                    imagenVisible === index + 1 ? "" : "hidden"
                  } w-full h-full object-contain rounded-sm`}
                  loading="lazy"
                />
              ) : null
            )}
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-center mt-3">
            {/* numero de fotos posibles */}
            {lista?.succes?.map((image, index) =>
              image.seccion === opcion.option ? (
                <button
                  onClick={() => setImagenVisible(index + 1)}
                  className={`${
                    imagenVisible === index + 1 ? "bg-green-500 " : " "
                  }text-slate-300 p-2 border rounded-lg`}
                >
                  {index + 1}
                </button>
              ) : null
            )}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};
