import { ChangeEvent, useState } from "react"
import useMision from "../hooks/useMision"
// interface de respuesta
export interface Res {
  succes: string;
}
export interface Error {
  message: string;
  errors:  Errors;
}

export interface Errors {
  imagen: string[];
}

type imagenes = File;

export const PanelAdminMision = () => {
  // estados de los inputs
  const [respuesta,setRespuesta] = useState<Res>()
  const [error,setError] = useState<Error | null>()
  const [imagen,setImagen] = useState<imagenes>()
  // estados de carga
  const [loading,setLoading] = useState<boolean>(false)
  // arrayfunction http
  const {saveImagen} = useMision()

  const fileOnEstatus = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && e.target.files.length > 0){
      setImagen(e.target.files[0])
    }
  }
  // onsubmit
  const handleClickForm:React.FormEventHandler<HTMLFormElement> = async(e) =>{
    e.preventDefault();
    const datos =  {
      imagen:imagen
    }
    setLoading(true)
    await saveImagen(datos,setRespuesta,setError);
    setLoading(false)
  }

  if(respuesta?.succes)
    {
      if(error) setError(null)
    }
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 text-slate-300 items-center">
      <h1 className="text-3xl font-bold ">Imagen mision</h1>
      <p className={`${loading ? ' ' : 'hidden '}text-sm text-green-500 text-center `}>Enviando informacion al servidor...</p>
      <p className={`${respuesta?.succes ? '' : 'hidden '} text-sm text-green-500 text-center`}>{respuesta?.succes}</p>
      <form action="" onSubmit={handleClickForm} className="w-1/2 flex flex-col gap-5 ">
        <label htmlFor="">Seleccione la nueva Imagenes</label>
        <input type="file" onChange={fileOnEstatus} accept="imagen/png, imagen/jpeg" />
        <p className="text-sm text-red-500 text-center">{error?.errors?.imagen}</p>
        <input type="submit" value={'Guardar imagen'} className="text-white p-2 border bg-green-500 hover:opacity-70 cursor-pointer transition-all"/>
      </form>
    </section>
  )
}
