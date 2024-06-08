import React, { createContext, ReactNode } from "react";

export const ContextTarjeta = createContext({})
export const {Provider} = ContextTarjeta;
interface TarjetaVehiculoProps {
  children: ReactNode;
} 
export const TarjetaVehiculo:React.FC<TarjetaVehiculoProps> = ({children}) => {
  return (
    <Provider value={{ }}>
        <div className='md:w-80 w-full h-[15rem]  flex flex-col  justify-between      shadow-2xl'>
            {children}
        </div>
    </Provider>
  )
}
