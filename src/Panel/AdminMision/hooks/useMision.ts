import axios, { isAxiosError } from "axios"
import { Dispatch } from "react"
interface archivo{
    imagen:File|undefined
}
export interface respuesta {
    succes:string
}
export interface Error {
    message: string;
    errors:  Errors;
  }
  
  export interface Errors {
    imagen: string[];
  }
type setRespuesta = Dispatch<respuesta>
type setError = Dispatch<Error | null>
const useMision = () => {
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    const saveImagen = async(datos:archivo,setRespuesta:setRespuesta,setError:setError) =>{
        try {
            const {data} = await axios.post(`${url}/misionimagen`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            await setRespuesta(data)
        } catch (error) {
            if(isAxiosError(error) && error.response){
                setError(error.response.data)
            }
        }
    }



  return {
    saveImagen
  }
}

export default useMision
