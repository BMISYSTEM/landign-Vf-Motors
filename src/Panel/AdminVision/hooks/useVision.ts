import axios, { isAxiosError } from "axios"
import { Dispatch } from "react";
import { Error, Respuesta } from "../views/PanelVision";

// interface
interface imagen{
    imagen:File|undefined
}
// tipos
type setRespuesta = Dispatch<Respuesta>
type setError = Dispatch<Error>
const useVision = () => {
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    const saveImagenVision = async(datos:imagen,setRespuesta:setRespuesta,setError:setError) =>{
        try {
            const {data} = await axios.post(`${url}/visionimagen`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            await setRespuesta(data)
        } catch (error) {
            if(isAxiosError(error) && error.response)
            {
                setError(error.response.data)
            }
        }
    }
        



  return {
    saveImagenVision
  }
}

export default useVision
