import { Element } from "react-scroll";
// import fotoheader from '../Assets/vfinstalaciones.png'
import { motion } from "framer-motion";
import styles from '../css/AnimationButton.module.css'
import stylesp from '../css/AnimationMaquina.module.css'
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import useSWR from "swr";
import axios from "axios";
import logo from '../Assets/logo.png'

// interface de succes
export interface Data {
  succes: Succes;
}

export interface Succes {
  id:          number;
  imagen:      string;
  titulo:      string;
  descripcion: string;
  created_at:  Date;
  updated_at:  Date;
}


export const Header = () => {
  const url = import.meta.env.VITE_API_URL;
  const urlImage = import.meta.env.VITE_API_URL_IMAGE;

  const {modalLogin} = useContext(HomeContext)
  // cargar la informacion del header
  const {data,isLoading} = useSWR(`${url}/banner`,()=>
  axios(`${url}/banner`))

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
    <Element name="Header">
      <section className="w-full h-[90vh] relative flex items-center justify-center flex-col gap-2 overflow-hidden bg-gray-950 ">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className={`${modalLogin === true ? 'hidden' : null} flex flex-col absolute items-center justify-center gap-5  z-10`}
        >
          <h1 className={`${stylesp.h1} md:text-6xl text-xl text-white font-bold`}>{informacion?.succes?.titulo}</h1>
          <h2 className={`${stylesp.h2} md:text-4xl text-lg text-white font-bold`}>
            {informacion?.succes?.descripcion}
          </h2>
          <div id="tenth" className={`${styles.button} `}>
            <button className="text-white p-2 border-2 border-white  font-bold font-serif bg-green-500 rounded-sm shadow-xl shadow-green-300 hover:bg-green-700 hover:scale-110 transition-all">
              <span className={`${styles.span} text-2xl`}>C</span>
              <span className={`${styles.span} text-2xl`}>o</span>
              <span className={`${styles.span} text-2xl`}>n</span>
              <span className={`${styles.span} text-2xl`}>t</span>
              <span className={`${styles.span} text-2xl`}>a</span>
              <span className={`${styles.span} text-2xl`}>c</span>
              <span className={`${styles.span} text-2xl`}>t</span>
              <span className={`${styles.span} text-2xl`}>e</span>
              <span className={`${styles.span} text-2xl`}>n</span>
              <span className={`${styles.span} text-2xl`}>o</span>
              <span className={`${styles.span} text-2xl`}>s</span>
            </button>
          </div>
        </motion.div>
        <img
          // src={"./Imagenes/bmw.webp"}
          src={`${urlImage}${informacion.succes.imagen}`}
          alt=""
          className=" md:object-fill object-cover  brightness-50    w-full h-full"
          style={{
            // WebkitMaskImage: 'linear-gradient(to botton, transparent, black)', // Degradado lineal de transparente a negro
            maskImage: "linear-gradient(black 90%,transparent 100%)",
          }}
        />
      </section>
    </Element>
  );
};
