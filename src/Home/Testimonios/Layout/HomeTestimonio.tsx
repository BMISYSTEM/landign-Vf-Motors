import { Element } from 'react-scroll'
import { motion } from 'framer-motion';

export const HomeTestimonio = () => {
  return (
    <Element name='testimonios'>
        <motion.section initial={{y:100 , opacity:0}} transition={{duration:1.5 }} whileInView={{ y:0 , opacity:1}}
        className='w-full h-screen flex flex-col gap-3 mt-10 p-2 items-center justify-center overflow-hidden'>
            <h3 className='text-3xl font-bold text-white text-center '>Testimonios</h3>
            <div className='md:w-2/3 w-full h-96 border-2 border-green-500 rounded-xl shadow-lg shadow-green-300'>

            </div>
            <div className='p-4 border-2 border-slate-200 mt-10'>
                <p className='text-lg font-bold text-white'>Entrega De Marzo</p>
            </div>
        </motion.section>
    </Element>
  )
}
