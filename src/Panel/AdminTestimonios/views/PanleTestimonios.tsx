import {  useState,ChangeEvent } from "react"
import { useTestimonios } from "../hooks/useTestimonios"
import React from 'react';
export interface Errors {
    message: string;
    errors:  ErrorsClass;
}

export interface ErrorsClass {
    descripcion: string[];
    video:       string[];
}

interface cargando {
    cargando:boolean,
    mensaje:string
}
export interface Succes {
    succes: string;
}
export interface Testimonios {
    succes: Succe[];
}

export interface Succe {
    id:          number;
    descripcion: string;
    video:       string;
    created_at:  Date;
    updated_at:  Date;
}

export const PanleTestimonios = () => {
    const urlvideo = import.meta.env.VITE_API_URL_IMAGE;
    const {createTestimonios,data,isLoading,deleteTestimonio} = useTestimonios()
    const [cargando,setCargando] = useState<cargando>({cargando:false,mensaje:''})
    const [respuesta,setRespuesta] = useState<Succes | null>()
    const [error,setError] = useState<Errors | null >()
    // estados de los inputs
    const [video,setVideo] = useState<File|undefined>();
    const [descripcion,setDescripcion] = useState<string>('');

    const fileOnEstatus = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files && e.target.files.length > 0){
          setVideo(e.target.files[0])
        }
      }
    const handleclickForm:React.FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault();
        setRespuesta(null)
        setError(null)
        const datos ={
            video:video,
            descripcion:descripcion
        }
        setCargando({cargando:true,mensaje:'Creando el testimonio'});
        await createTestimonios(datos,setRespuesta,setError);
        setCargando({cargando:false,mensaje:'Creando el testimonio'});
    }

    const deletetes = async(id:number) =>{
        setRespuesta(null)
        setError(null)
        const datos ={
            id:id,
        }
        setCargando({cargando:true,mensaje:'Eliminando Testimonio'});
        await deleteTestimonio(datos,setRespuesta,setError);
        setCargando({cargando:false,mensaje:''});
    }
                
    const testimonios:Testimonios = data?.data;
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 ">
        <h1 className="text-3xl font-bold text-slate-300 text-center">Testimonios</h1>
        <p className={`${respuesta?.succes ? null : 'hidden'} text-center text-green-500`}>{respuesta?.succes}</p>
        <p className={`${cargando.cargando ? null : 'hidden'} text-green-500 text-center animate-bounce`}>{cargando.mensaje}</p>
        <div className="w-full h-full flex flex-row gap-2 ">
            {/* FORMULARIO */}
            <div className="w-1/3 p-2 h-full flex flex-col gap-2">
                <form onSubmit={handleclickForm} action="" className="flex flex-col gap-5 text-slate-300">
                    <label htmlFor="">Seleccione imagen acargar</label>
                    <input type="file" onChange={fileOnEstatus} accept="video/mp4" />
                    <p className={`${error?.errors?.video ? null : 'hidden'} text-center text-red-500`}>{error?.errors?.video}</p>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" onChange={(e)=>setDescripcion(e.target.value)} value={descripcion} className="p-2 rounded-lg border-2 bg-[#1D2432]" placeholder="descricion del video"/>
                    <p className={`${error?.errors?.descripcion ? null : 'hidden'} text-center text-red-500`}>{error?.errors?.descripcion}</p>
                    <input type="submit" value={'Guardar imagen'} className="p-2 text-white border-2 bg-green-500 font-bold hover:opacity-70 cursor-pointer transition-all" />
                </form>
            </div>
            {/* LISTA DE IMAGENES */}
            <div className="w-full h-full flex flex-col gap-2 border">
                {isLoading ? 
                    <p className="text-green-500 animate-bounce">Cargando Videos de testimonios</p>
                :
                    <table>
                        <thead>
                            <tr className="w-full text-slate-300 text-center bg-sky-800">
                                <td>Descripcion</td>
                                <td>Video</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody> 
                            {testimonios.succes?.map(testimonio => (
                                <tr className="text-slate-300 text-center border-b">
                                    <td>{testimonio?.descripcion}</td>
                                    <td>
                                        <video width="300" height="70" controls>
                                            <source src={`${urlvideo}${testimonio?.video}`} type="video/mp4" />
                                                Tu navegador no admite la etiqueta de video.
                                        </video>
                                    </td>
                                    <td className="p-2">
                                        <button onClick={()=>deletetes(testimonio.id)}
                                        className="p-2 bg-red-500 rounded-xl shadow-lg shadow-red-300 hover:opacity-70 transition-all"
                                        >Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    </section>
  )
}
