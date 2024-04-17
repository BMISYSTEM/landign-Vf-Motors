import { Element } from "react-scroll";
// import fotoheader from '../Assets/vfinstalaciones.png'
import { motion } from 'framer-motion';
export const Header = () => {
  return (
    <Element name="Header">
      <section className="w-full h-[90vh] relative flex items-center justify-center flex-col gap-2 overflow-hidden bg-gray-950 ">
        <motion.div initial={{x:100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}}
         className="flex flex-col absolute items-center justify-center gap-5  z-10">
            <h1 className="text-6xl text-white font-bold">Slogan de la Marca</h1>
            <h2 className="text-4xl text-white font-bold">Informacion o mensaje a mostrar</h2>
            <button className="p-2 bg-green-500 rounded-xl text-white font-bold border-2 border-white">
                Contactanos
            </button>
        </motion.div>
        <img src={'./Imagenes/vfinstalaciones.png'} alt="" className=" object-fill brightness-50    w-full h-full" style={{
            // WebkitMaskImage: 'linear-gradient(to botton, transparent, black)', // Degradado lineal de transparente a negro
            maskImage: 'linear-gradient(black 90%,transparent 100%)'
        }} />
      </section>
    </Element>
  );
};
