import axios from "axios";
import useSWR from "swr";

export interface Respuesta {
    succes: Succe[];
}

export interface Succe {
    id:             number;
    placa:          string;
    kilometraje:    string;
    foto1:          string;
    foto2:          string;
    foto3:          string;
    foto4:          string;
    created_at:     Date;
    updated_at:     Date;
    marcas:         number;
    modelos:        number;
    estados:        number;
    valor:          string;
    peritaje:       string;
    empresas:       number;
    disponibilidad: number;
    caja:           string;
    version:        string;
    linea:          string;
    soat:           string;
    tecnomecanica:  string | null;
    marca_nombre:   string;
    model_nombre:   string;
    estado_nombre:  string;
}


export const useInventario = () => {

    const {data,error,isLoading,mutate} = useSWR('https://public.cartmots.com/api/allvehiculo?limite=1000&offset=1',()=>
    axios('https://public.cartmots.com/api/allvehiculo?limite=1000&offset=1',{
        headers:{
            Authorization:`Bearer 1501|8ZvSUE5J9xxWcMmZHA5CKnqyMIF37ccAB7orMQz1`
        }
    }))

    return {
        data,error,
        isLoading,
        mutate,
    }
}
