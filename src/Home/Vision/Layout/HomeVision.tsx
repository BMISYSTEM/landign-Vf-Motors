import { Element } from "react-scroll";
import mision from "../Assets/mission.png";
import { motion } from 'framer-motion';

export const HomeVision = () => {
  return (
    <Element name="vision">
      <section className="relative bg-cover w-full h-auto flex flex-row gap-5 p-10 justify-between items-start">
      {/* <img src={fondo} alt="fondo" className="absolute w-full  bg-opacity-20" style={{
            maskImage: 'linear-gradient(black 90%,transparent 95%)',
        }}/> */}
        {/* mision */}
        <motion.div initial={{x:100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}}
        className="  shadow-2xl shadow-green-300/20 w-full h-[15rem] text-justify flex flex-col gap-4 bg-[#1D2432]/70 justify-center p-2 rounded-xl border-2 border-green-500">
          <p className="text-3xl font-bold text-white ">Vision</p>
          <p className="text-lg text-slate-200">
            En el 2025 ser reconocidos como empresa lider en el sector
            automotriz, en la compra y venta de vehiculos usados y e los
            servicios posteriores. 
            <br />
            Cotruir un equipo profesional, solido he
            integral que vaya a la banguardia de nuevos procesos y tecnologia.
          </p>
          
        </motion.div>
        {/* imagen */}
        <motion.div initial={{y:100 , opacity:0}} transition={{duration:1 }} whileInView={{ y:0 , opacity:1}}
        className="w-1/2 flex items-end justify-center  mr-[10rem]">
          <img src={mision} alt="Imagen de mision" className="w-40" />
        </motion.div>
      </section>
    </Element>
  );
};
