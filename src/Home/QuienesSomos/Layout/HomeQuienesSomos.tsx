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
              <DivAnimateLinea css="w-[50rem] h-[15rem] rounded-xl shadow-2xl shadow-green-500/50">
                  <p className=" text-3xl font-bold text-white">Quienes Somos</p>
                  <p className="text-slate-200 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit soluta quasi magnam. Sint, vel, sit ratione rem aperiam expedita esse doloribus provident nulla, illo exercitationem assumenda quaerat at. Quaerat, accusamus.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id quibusdam iste cupiditate, doloremque obcaecati eveniet labore repudiandae laborum corporis ipsum. Quo quam voluptatem deleniti quos iure, aspernatur beatae?
                  </p>
              </DivAnimateLinea>
            </motion.div>
        </section>
    </Element>
  )
}
