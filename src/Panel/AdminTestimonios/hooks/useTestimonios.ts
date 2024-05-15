import axios, { isAxiosError } from "axios"
import useSWR from "swr";

interface createtesti{
    video:File|undefined,
    descripcion:string
}
interface deletetestimonio{
    id:number
}

export const useTestimonios = () => {
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    const createTestimonios = async(datos:createtesti,setRespuesta:any,setError:any) =>{
        try {
            const {data} = await axios.post(`${url}/createtestimonio`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            setRespuesta(data)
            mutate()
        } catch (error) {
            if(isAxiosError(error) && error.response){
                setError(error.response.data)
            }
        }
    }
    const deleteTestimonio = async(datos:deletetestimonio,setRespuesta:any,setError:any) =>{
        try {
            const {data} = await axios.post(`${url}/deletetestimonio`,datos,{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            setRespuesta(data)
            mutate()
        } catch (error) {
            if(isAxiosError(error) && error.response){
                setError(error.response.data)
            }
        }
    }


    const {data,isLoading,mutate} = useSWR(`${url}/testimonios`,()=>
    axios.get(`${url}/testimonios`))

  return {
    createTestimonios,
    data,
    isLoading,
    deleteTestimonio
  }
}
