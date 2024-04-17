import { Element } from "react-scroll"
import mision from '../Assets/mission.png'
import { motion } from "framer-motion"

export const HomeMision = () => {
  return (
    <Element name="mision">
        <section className={`relative w-full h-auto flex flex-row  gap-5 p-10 justify-between items-center overflow-hidden `}>
            {/* <img src={fondo} alt="fondo" className="w-full h-full bg-opacity-20"/> */}
            <div className=" flex flex-row items-center p-5 ">
                {/* imagen */}
                <motion.div initial={{x:-100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}} 
                className="w-full flex items-end justify-center ">
                    <img src={mision} alt="Imagen de mision" />
                </motion.div>
                {/* mision */}
                <motion.div initial={{x:100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}}
                 className="shadow-2xl shadow-green-300/20 w-full h-[20rem] text-justify flex flex-col gap-4 bg-[#1D2432]/70 justify-center p-2 rounded-xl border-2 border-green-500">
                    <p className="text-2xl font-bold text-white ">Mision</p>
                    <p className="text-lg text-slate-200">
                    Facilitar a nuestros clientes vehiculos y servicios de calidad que cumplan so sus necesidades de una manera profecional, logrando asi su fidelidad y lealtad
                    </p>
                    <p className="text-3xl font-bold text-white ">
                        Propuesta de valor.
                    </p>
                    <p className="text-lg text-slate-200">
                        Ofrecer a uestros clientes nuna experiencia unica y diferente.
                    </p>
                </motion.div>

            </div>
        </section>
    </Element>
  )
}
