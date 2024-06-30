import  { useState,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'animate.css'
interface imagen{
    id:number,
    foto1:string,
    foto2:string,
    foto3:string,
    foto4:string,
    marca:string,
    linea:string,
    version:string,
    modelo:string,
    caja:string,
    placa:string,
    soat?:Date,
    tecno?:Date,
    valor:string,
    kilometraje:string
}


import kilometraje from '../assets/kilometraje.png'
import { Link } from 'react-router-dom'

export const Imagenes = (imagenes:imagen) => {
  const [visible,SetVisible] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(visible === 3) {
                SetVisible(0);
            }else{
                SetVisible(visible  + 1);
            }
        }, 3000); // 10000 milisegundos = 10 segundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [visible]);
  return (
    <Link to={`./detalle/${imagenes.id}`} className='w-full  md:h-auto h-[20rem] bg-[#1D2432]  flex flex-row overflow-hidden relative justify-between'>
        <LazyLoadImage src={imagenes.foto1}  key={imagenes.foto1} alt='imagen' className={`${visible === 0 ? "animate__animated animate__fadeInRight" : " hidden"} w-[100%] h-full  object-contain md:object-cover  `}  />
        <LazyLoadImage src={imagenes.foto2}  key={imagenes.foto2} alt='imagen' className={`${visible === 1 ? "animate__animated animate__fadeInRight" : " hidden"} w-[100%] h-full  object-contain md:object-cover`}  />
        <LazyLoadImage src={imagenes.foto4}  key={imagenes.foto4} alt='imagen' className={`${visible === 3 ? "animate__animated animate__fadeInRight" : " hidden"} w-[100%] h-full  object-contain md:object-cover `}  />
        <LazyLoadImage src={imagenes.foto3}  key={imagenes.foto3} alt='imagen' className={`${visible === 2 ? "animate__animated animate__fadeInRight" : " hidden"} w-[100%] h-full  object-contain md:object-cover `}  />
        <div className={`w-full h-full bg-black/20 absolute flex flex-col  `}>
            <div className={' h-full'}>
                <div className={' h-5 bg-gradient-to-b from-black'}>

                </div>
            </div>
            <div className={'p-2'}>
                <p className={'text-lg text-left font-bold text-white'}>{imagenes.marca} {imagenes.modelo}</p>
                <p className={'text-lg font-bold text-left text-white '}>{(Number(imagenes.valor)).toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'COP',
                })}</p>
            </div>

            <div className={'w-full flex flex-row gap-5 bg-gradient-to-t from-black p-2'}>
                <div className={'flex flex-row gap-1 items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-4 h-4 text-red-700">
                        <path
                            d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                        <path fillRule="evenodd"
                              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                              clipRule="evenodd"/>
                    </svg>
                    <p className={'text-white'}>{imagenes.modelo}</p>
                </div>
                <div className={'flex flex-row gap-1 items-center'}>
                    <img src={kilometraje} alt="icono de kilometraje" />
                    <p className={'text-white'}>{imagenes.kilometraje} km</p>
                </div>
            </div>
        </div>
    </Link>
  )
}
