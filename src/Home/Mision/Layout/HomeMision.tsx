import { Element } from "react-scroll"
import { motion } from "framer-motion"
import { DivAnimateLinea } from "../../../ComponentsGenerales/DivAnimateLinea"
// imagen 
import mision from '../Assets/carros.webp'
// import fondo from '../Assets/cuadrícula verde.png'
export const HomeMision = () => {
  return (
    <Element name="mision">
        <section className={`relative w-full h-auto flex md:flex-row flex-col  gap-5  justify-between items-center overflow-hidden `}>
            {/* <img src={fondo} alt="fondo" className="absolute w-full  bg-opacity-20" style={{
            maskImage: 'linear-gradient(black 90%,transparent 95%)',
        }}/> */}
            <div className="  flex md:flex-row flex-col items-center p-5 gap-2 ">
                {/* imagen */}
                <motion.div initial={{x:-100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}} 
                className="w-full flex items-end justify-center ">
                    <img src={mision} alt="Imagen de mision" className=" opacity-90 w-full h-auto" style={{
                        maskImage: "linear-gradient(black 90%,transparent 100%)",
                    }}/>
                </motion.div>
                {/* mision */}
                <motion.div initial={{x:100 , opacity:0}} transition={{duration:1 }} whileInView={{ x:0 , opacity:1}}
                 >
                    <DivAnimateLinea css="w-[99%] md:h-[15rem] h-auto  z-10 bg-[#1D2432] rounded-xl flex flex-col gap-4 justify-center shadow-2xl shadow-green-500/50">
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
                    </DivAnimateLinea>
                </motion.div>

            </div>
        </section>
    </Element>
  )
}
