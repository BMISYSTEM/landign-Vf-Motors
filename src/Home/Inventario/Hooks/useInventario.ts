import axios from "axios";
import { useState } from "react";

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
    soat:           Date;
    tecnomecanica:  Date | null;
    marca_nombre:   string;
    model_nombre:   string;
    estado_nombre:  string;
}


export const useInventario = () => {
    const [loading,setLoading] = useState(false)
    const allVehiculo = async(): Promise<Respuesta> => {
        // se declara el inicio de la carga
        setLoading(true)
        try {
            const respuesta= await axios.get<Respuesta>('https://public.cartmots.com/api/allvehiculo?limite=1000&offset=1', {
                headers: {
                    Authorization: `Bearer 1284|RYYRkE6sSqTU434Oxj36EHop8bqOV7BwNk0FK5Hx`
                }
            });
            return respuesta.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
        // se declara el fin de la carga
        setLoading(false)
    }

    return {
        loading,
        allVehiculo
    }
}
