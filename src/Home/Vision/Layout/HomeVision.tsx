import { Element } from "react-scroll";
import mision from "../Assets/mission.png";

export const HomeVision = () => {
  return (
    <Element name="vision">
      <section className=" bg-cover w-full h-auto flex flex-row gap-5 p-10 justify-between items-start">
        {/* mision */}
        <div className="w-full h-[15rem] text-justify flex flex-col gap-4 bg-[#1D2432]/70 justify-center p-2 rounded-xl border-2 border-green-500">
          <p className="text-3xl font-bold text-white ">Vision</p>
          <p className="text-lg text-slate-200">
            En el 2025 ser reconocidos como empresa lider en el sector
            automotriz, en la compra y venta de vehiculos usados y e los
            servicios posteriores. 
            <br />
            Cotruir un equipo profesional, solido he
            integral que vaya a la banguardia de nuevos procesos y tecnologia.
          </p>
          
        </div>
        {/* imagen */}
        <div className="w-1/2 flex items-end justify-center  mr-[10rem]">
          <img src={mision} alt="Imagen de mision" className="w-40" />
        </div>
      </section>
    </Element>
  );
};
