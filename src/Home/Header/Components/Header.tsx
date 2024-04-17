import { Element } from "react-scroll";
// import fotoheader from '../Assets/vfinstalaciones.png'
export const Header = () => {
  return (
    <Element name="Header">
      <section className="w-full h-[90vh] relative flex items-center justify-center flex-col gap-2 overflow-hidden">
        <div className="flex flex-col absolute items-center justify-center  z-10">
            <h1 className="text-6xl text-white font-bold">Slogan de la Marca</h1>
            <h2 className="text-4xl text-white font-bold">Informacion o mensaje a mostrar</h2>
            <button className="p-2 bg-green-500 rounded-xl text-white font-bold border-2 border-white">
                Contactanos
            </button>
        </div>
        <img src={'./Imagenes/vfinstalaciones.png'} alt="" className="object-fill brightness-50    w-full h-full" />
      </section>
    </Element>
  );
};
