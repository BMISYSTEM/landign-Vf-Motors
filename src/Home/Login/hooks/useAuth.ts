import axios, { AxiosError, isAxiosError } from "axios";
import { Dispatch } from "react";
import { Error, Errors, Login } from "./DTO/dtoLogin";


interface credenciales{
    email:string,
    password:string
}
type SetResponse = Dispatch<Login>
type setError = Dispatch<any>

export const useAuth = () => {
    const url = import.meta.env.VITE_API_URL;
    const login = async(datos:credenciales,setResponse:SetResponse,setError:setError) =>
    {
        try {
            const {data} = await axios.post(`${url}/login`,datos)
            await setResponse(data);
        } catch (error) {
            if(isAxiosError(error) && error.response){
                console.log(error.response.data)
                setError(error.response.data)
            }
        }
    }

    return {
        login
    }
};
