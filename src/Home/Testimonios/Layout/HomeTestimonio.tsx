import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useTestimonios } from "../../../Panel/AdminTestimonios/hooks/useTestimonios";
// imagen
import logo from "../Assets/logo.png";
import { useState } from "react";

export interface Testimonios {
  succes: Succe[];
}

export interface Succe {
  id: number;
  descripcion: string;
  video: string;
  created_at: Date;
  updated_at: Date;
}
export const HomeTestimonio = () => {
  const urlvideo = import.meta.env.VITE_API_URL_IMAGE;
  const { data, isLoading } = useTestimonios();
  const [videoselect, setVideoSelect] = useState(1);

  if (isLoading) {
    return (
      <div className="w-full  bg-slate-950 text-center justify-center items-center">
        <img
          src={logo}
          alt=""
          className="object-cover animate-pulse w-full h-full"
        />
      </div>
    );
  }

  const testimonios: Testimonios = data?.data;
  return (
    <Element name="testimonios">
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-full h-screen flex flex-col gap-3 mt-10 p-2 items-center justify-center overflow-hidden"
      >
        <h3 className="text-3xl font-bold text-white text-center ">
          Testimonios
        </h3>
        {testimonios?.succes?.map((testimonio, index) => (
          <div
            key={index}
            className={`${videoselect === (index + 1) ? null : "hidden "} md:w-2/3 flex flex-col gap-2 items-center text-center`}
          >
            <div
              className={`  w-full h-96 border-2  border-green-500 rounded-xl shadow-lg shadow-green-300`}
            >
              <video className={` w-full h-full`} controls>
                <source
                  src={`${urlvideo}${testimonio?.video}`}
                  type="video/mp4" 
                />
                Tu navegador no admite la etiqueta de video.
              </video>
            </div>
            <div className=" md:w-1/2 w-[80%] p-4 border-2 border-slate-200 mt-10">
              <p className="text-lg font-bold text-white">{testimonio.descripcion}</p>
            </div>
          </div>
        ))}
        {/* lista de videos */}
        <div className="w-full flex flex-row gap-5 items-center justify-center">
        {testimonios?.succes?.map((testimonio,index) => (
          <button onClick={()=>setVideoSelect(index + 1)}
           className={`${videoselect === index + 1 ? 'bg-green-500 ' : null } text-white p-2 text-xl border-2 rounded-lg hover:bg-green-500 transition-all  `}>
            {index + 1}
            <p className="hidden">{testimonio.descripcion}</p>
          </button>
        ))}
        </div>
      </motion.section>
    </Element>
  );
};
