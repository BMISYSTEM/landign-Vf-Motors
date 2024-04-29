import axios, { isAxiosError } from "axios"
import { Dispatch } from "react";
interface archivo{
    imagen:File
}
interface textos {
    titulo:string;
    descripcion:string
}
export interface respuesta {
    succes:string
}

type setRespuesta = Dispatch<respuesta>
type setError = Dispatch<any | null>

const useHeadre = () => {
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');

    const updateImagen = async(datos:archivo,setRespuesta:setRespuesta,setError:setError) =>{
        try {
            const {data} = await axios.post(`${url}/bannerimage`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            await setRespuesta(data);
        } catch (error) {
            if(isAxiosError(error) && error.response){
                console.log(error.response.data)
                setError(error.response.data)
            }
        }
    }

    const updateText = async(datos:textos,setRespuesta:setRespuesta,setError:setError) =>{
        try {
            const {data} = await axios.post(`${url}/banner`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            await setRespuesta(data);
        } catch (error) {
            if(isAxiosError(error) && error.response){
                console.log(error.response.data)
                setError(error.response.data)
            }
        }
    }


  return {
    updateImagen,updateText
  }
}

export default useHeadre
