import { Element } from "react-scroll"
import mision from '../Assets/mission.png'
export const HomeMision = () => {
  return (
    <Element name="mision">
        <section className="bg-[url('./Imagenes/carrossvg.png')] bg-no-repeat backdrop-blur-sm bg-cover w-full h-auto flex flex-row gap-5 p-10 justify-between items-center">
            {/* imagen */}
            <div className="w-full flex items-end justify-center">
                <img src={mision} alt="Imagen de mision" />
            </div>
            {/* mision */}
            <div className="w-full h-[20rem] text-justify flex flex-col gap-4 bg-[#1D2432]/70 justify-center p-2 rounded-xl border-2 border-green-500">
                <p className="text-3xl font-bold text-white ">Mision</p>
                <p className="text-lg text-slate-200">
                Facilitar a nuestros clientes vehiculos y servicios de calidad que cumplan so sus necesidades de una manera profecional, logrando asi su fidelidad y lealtad
                </p>
                <p className="text-3xl font-bold text-white ">
                    Propuesta de valor.
                </p>
                <p className="text-lg text-slate-200">
                    Ofrecer a uestros clientes nuna experiencia unica y diferente.
                </p>
            </div>
        </section>
    </Element>
  )
}
