import React, { createContext, ReactNode } from "react";

export const ContextTarjeta = createContext({})
export const {Provider} = ContextTarjeta;
interface TarjetaVehiculoProps {
  children: ReactNode;
} 
export const TarjetaVehiculo:React.FC<TarjetaVehiculoProps> = ({children}) => {
  return (
    <Provider value={{ }}>
        <div className='md:w-72 w-full md:h-[25rem] h-auto flex flex-col border-2 justify-between rounded-xl p-1 border-green-500 gap-2 bg-[#1D2432]   shadow-2xl'>
            {children}
        </div>
    </Provider>
  )
}
