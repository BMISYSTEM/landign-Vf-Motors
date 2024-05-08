import axios, { isAxiosError } from "axios";
import { Dispatch } from "react";
import useSWR from "swr";

interface data {
  imagen: File | undefined;
  seccion: number | undefined;
}
interface dataDelete {
    id:number
}
interface res {
  succes: string;
}
export interface Error {
    message: string;
    errors:  Errors;
}

export interface Errors {
    imagen:  string[];
    seccion: string[];
}
type setRespuesta = Dispatch<res>;
type setError = Dispatch<Error>;
const useFototeca = () => {
  const url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const saveImagen = async (
    datos: data,
    setRespuesta: setRespuesta,
    setError: setError
  ) => {
    try {
      const { data } = await axios.post(`${url}/fototecaimagen`, datos, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setRespuesta(data);
      await mutate();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        setError(error.response.data);
      }
    }
  };
//   eliminar una 
  const deleteImagen = async(datos:dataDelete,setRespuesta:setRespuesta,setError:setError) =>{
    try {
        const {data} = await axios.post(`${url}/deletefototeca`,datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setRespuesta(data);
        await mutate();
    } catch (error) {
        if(isAxiosError(error) && error.response){
            setError(error.response.data);
        }
    }
  }
//   consultar todas
  const { data, isLoading, mutate } = useSWR(`${url}/fototeca`, () =>
    axios.get(`${url}/fototeca`)
  );
  return {
    saveImagen,
    data,
    isLoading,
    mutate,
    deleteImagen
  };
};

export default useFototeca;
