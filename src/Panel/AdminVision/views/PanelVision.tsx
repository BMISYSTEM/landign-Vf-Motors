import React, { ChangeEvent, useState } from "react";
import useVision from "../hooks/useVision"

export interface Respuesta {
  succes: string;
}
export interface Error {
  message: string;
  errors:  Errors;
}

export interface Errors {
  imagen: string[];
}


export const PanelVision = () => {
  const {saveImagenVision} = useVision();
const [respuesta,setRespuesta] = useState<Respuesta>()
const [error,setError] = useState<Error | null>()
  const [imagen,setImagen] = useState<File>()
  const [loading,setLoading] = useState<boolean>(false)
  const fileonState = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && e.target.files.length > 0 )
      {
        setImagen(e.target.files[0]);
      }
  }
  const handleClickForm:React.FormEventHandler<HTMLFormElement> = async(e) =>{
    e.preventDefault();
    const datos = {
      'imagen':imagen
    }
    setLoading(true);
    await saveImagenVision(datos,setRespuesta,setError);
    setLoading(false)
  }
  if(respuesta?.succes){
    if (error) setError(null)
  }
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 items-center ">
        <h1 className="text-3xl font-bold text-slate-300">Imagen Vision</h1>
        <p className={`${respuesta?.succes ? '' : 'hidden'} text-sm text-green-500 text-center`}>{respuesta?.succes}</p>
        <p className={`${loading ? '' : 'hidden '} text-sm text-center text-green-500 animate-bounce`}>Cargando informacion al servidor</p>
        <form action="" onSubmit={handleClickForm} className="w-1/2 flex flex-col gap-3">
            <label htmlFor="" className="text-slate-300">Selecione la nueva Imagenes</label>
            <input type="file" onChange={fileonState} accept="imagen/png, imagen/jpg" />
            <p className={`${error?.errors?.imagen ? '' : 'hidden '} text-sm text-center text-red-500`}>{error?.errors?.imagen[0]}</p>
            <input type="submit" value={'Guardar imagen'} className="text-white p-2 border bg-green-500 hover:opacity-70 cursor-pointer transition-all"/>
        </form>
    </section>
  )
}
