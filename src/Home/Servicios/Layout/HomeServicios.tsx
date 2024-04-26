import { Element } from 'react-scroll'
import { TarjetasServicios } from '../Components/TarjetasServicios'
// imagenes
import prestamo from '../Assets/prestamo.png'
import credito from '../Assets/credito.png'
import asesorios from '../Assets/asesorios.png'
import inventario from '../Assets/inventario.png'
import soat from '../Assets/soat.png'
import traspasos from '../Assets/traspasos.png'
import { motion } from 'framer-motion';
export const HomeServicios = () => {
  return (
    <Element name='servicios'>
        <section className='bg-slate-950 shadow-2xl shadow-gray-950 w-full relative md:h-screen h-96 flex flex-col gap-10 items-center'>
            <div className='absolute flex flex-col gap-5 w-full h-full items-center'>
                <h4 className='text-3xl font-bold text-white text-center'>Servicios</h4>
                {/* servicios */}
                <motion.div initial={{opacity:0}} transition={{duration:3 }} whileInView={{opacity:1}}
                className='md:w-2/3 w-full h-full flex flex-row gap-5 justify-center flex-wrap '>
                    {/* tarjeta */}
                    <TarjetasServicios label='Prestamo' imagen={prestamo}/>
                    <TarjetasServicios label='Inventario' imagen={inventario}/>
                    <TarjetasServicios label='Traspasos' imagen={traspasos}/>
                    <TarjetasServicios label='Soat' imagen={soat}/>
                    <TarjetasServicios label='Credito Vehicular' imagen={credito}/>
                    <TarjetasServicios label='Asesorios' imagen={asesorios}/>
                </motion.div>
            </div>
            {/* imagen de fondo */}
            {/* <img src={fondo} alt="fondo servicios" className='w-full h-full '/> */}
        </section>
    </Element>
  )
}
