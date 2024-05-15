import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { DivAnimateLinea } from "../../../ComponentsGenerales/DivAnimateLinea";
import useSWR from "swr";
import axios from "axios";

// imagen 
import logo from '../Assets/logo.png'
// import fondo from '../Assets/cuadrícula verde.png'

export interface Data {
    succes: Succes;
  }
  
  export interface Succes {
    id:          number;
    imagen:      string;
    created_at:  Date;
    updated_at:  Date;
  }
export const HomeVision = () => {
  const url = import.meta.env.VITE_API_URL;
  const urlImage = import.meta.env.VITE_API_URL_IMAGE;
   // cargar la informacion del header
const {data,isLoading} = useSWR(`${url}/vision`,()=>
  axios(`${url}/vision`))

  if(isLoading)
    {
      return (
        <div className="w-full  bg-slate-950 text-center justify-center items-center">
          <img src={logo} alt="" className="object-cover animate-pulse w-full h-full" />
        </div>
      )
    }
  const informacion:Data = data?.data;
  return (
    <Element name="vision">
      <section className=" relative bg-cover w-full h-auto flex md:flex-row flex-col gap-5 p-10 md:justify-between justify-center items-start">
        <motion.div initial={{x:100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}}>
          <DivAnimateLinea css="md:w-[40rem] md:h-[10rem] rounded-xl shadow-2xl shadow-green-500/50">
            <p className="text-3xl font-bold text-white ">Vision</p>
            <p className="text-lg text-slate-200">
              En el 2025 ser reconocidos como empresa lider en el sector
              automotriz, en la compra y venta de vehiculos usados y e los
              servicios posteriores. 
              <br />
              Cotruir un equipo profesional, solido he
              integral que vaya a la banguardia de nuevos procesos y tecnologia.
            </p>
          </DivAnimateLinea>
        </motion.div>
        {/* imagen */}
        <motion.div initial={{y:100 , opacity:0}} transition={{duration:1 }} whileInView={{ y:0 , opacity:1}}
        className="md:w-[60rem] w-full  flex md:items-end items-center  justify-center  md:mr-[10rem]">
          <img loading="lazy" src={`${urlImage}${informacion?.succes?.imagen}`} alt="Imagen de mision" className="w-full h-96 md:ml-10 md:object-cover object-contain " />
        </motion.div>
      </section>
    </Element>
  );
};
