import axios, { AxiosResponse } from "axios";

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

    const allVehiculo = async(): Promise<Respuesta[]> => {
        try {
            const respuesta: AxiosResponse<Respuesta[]> = await axios.get<Respuesta[]>('https://public.cartmots.com/api/allvehiculo', {
                headers: {
                    Authorization: `Bearer 1258|JdxoyHrTPkqAFDKtzGAwfqrQeXIScydhvYXTWzcS`
                }
            });
            return respuesta.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    return {
        allVehiculo
    }
}
