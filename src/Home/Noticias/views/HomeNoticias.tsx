import useSWR from "swr";
import { TarjetaNoticia } from "../components/TarjetaNoticia";
import { Link } from 'react-router-dom';
import axios from "axios";
export interface Noticias {
  succes: Succe[];
}

export interface Succe {
  id: number;
  titulo: string;
  imagen: string;
  noticia: string;
  created_at: Date;
  updated_at: Date;
}

export const HomeNoticias = () => {
  const url = import.meta.env.VITE_API_URL;
  const urlImagen = import.meta.env.VITE_API_URL_IMAGE;
  const { data, isLoading } = useSWR(`${url}/indexnoticias`, () =>
    axios.get(`${url}/indexnoticias`)
  );
  if (isLoading) {
    return (
      <div className="w-full h-screen grid place-items-center bg-slate-950">
        <p className="text-3xl font-bold text-green-500 animate-bounce">
          Cargando Noticias...
        </p>

      </div>
    );
  }
  const listaNoticias: Noticias = data?.data;
  return (
    <section className="w-full h-screen flex flex-col  gap-2 bg-slate-950 items-center  ">
      <div className='fixed z-50 w-16 h-16 bottom-[5%] md:left-[92%] left-[80%] hover:scale-105 transition-all'>
              <Link to={'https://wa.me/message/IH5SZDTONQ5MK1'}>
                <img src={'/Imagenes/whatsapp.png'} alt="" className=' h-auto hover:cursor-pointer hover:animate-pulse' />
              </Link>
          </div>
        <div className="w-full h-10  flex flex-row justify-between">
          {/* logo de la empresa */}
          <Link to={"/"} className="w-full">
            <img
              src="/Imagenes/logo.png"
              alt="Logo de la empresa"
              className="w-48 h-auto"
            />
          </Link>
        </div>
      <h1 className="text-3xl font-bold text-slate-300">Noticias</h1>
      {/* noticias */}
      <section className="w-full h-full  flex flex-row flex-wrap gap-5 overflow-auto p-3 justify-center items-start">
        {/* tarjeta de noticia */}
        {listaNoticias?.succes?.map((noticia,index)=>(
            <TarjetaNoticia 
            imagen={`${urlImagen}${noticia.imagen}`}
            titulo={noticia.titulo}
            noticia={noticia.noticia}
            fecha={noticia.created_at}
            key={index}
            />
        ))}

      </section>
    </section>
  );
};
