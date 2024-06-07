import { Element } from "react-scroll"
import { motion } from 'framer-motion';
import { DivAnimateLinea } from "../../../ComponentsGenerales/DivAnimateLinea";
export const HomeQuienesSomos = () => {
  return (
    <Element name="quienes">
        <section className="w-full h-auto flex flex-row items-center justify-center gap-2  ">
            {/* texto */}
            <motion.div initial={{y:100 , opacity:0}} transition={{duration:1 }} whileInView={{ y:0 , opacity:1}}
            className={` w-auto h-auto mt-10 `}>
              <DivAnimateLinea css="md:w-[50rem]  w-full rounded-xl shadow-2xl shadow-green-500/50">
                  <p className=" text-3xl font-bold text-white">Quienes Somos</p>
                  <p className="text-slate-200 text-lg">
                    Somo una empresa con 10 años de experiencia en el sector automotriz y financiero con un equipo altamente capacitado para brindarte la mejor experiencia
                  </p>
              </DivAnimateLinea>
            </motion.div>
        </section>
    </Element>
  )
}
