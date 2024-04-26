import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { DivAnimateLinea } from "../../../ComponentsGenerales/DivAnimateLinea";

// import mision from "../Assets/mission.png";
import manejando from "../Assets/abrazando.jpeg";
export const HomeVision = () => {
  return (
    <Element name="vision">
      <section className=" relative bg-cover w-full h-auto flex md:flex-row flex-col gap-5 p-10 md:justify-between justify-center items-start">
      {/* <img src={fondo} alt="fondo" className="absolute w-full  bg-opacity-20" style={{
            maskImage: 'linear-gradient(black 90%,transparent 95%)',
        }}/> */}
        {/* mision */}
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
          <img src={manejando} alt="Imagen de mision" className="w-96 h-96 md:ml-10 md:object-cover object-fill" />
        </motion.div>
      </section>
    </Element>
  );
};
