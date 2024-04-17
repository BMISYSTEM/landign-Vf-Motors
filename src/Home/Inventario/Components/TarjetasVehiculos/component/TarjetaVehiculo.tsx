import React, { createContext, ReactNode } from "react";

export const ContextTarjeta = createContext({})
export const {Provider} = ContextTarjeta;
interface TarjetaVehiculoProps {
  children: ReactNode;
} 
export const TarjetaVehiculo:React.FC<TarjetaVehiculoProps> = ({children}) => {
  return (
    <Provider value={{ }}>
        <div className='w-72 h-[25rem] flex flex-col border-2 justify-between rounded-xl p-1 border-green-500 gap-2 bg-[#1D2432]   shadow-2xl'>
            {children}
        </div>
    </Provider>
  )
}
