import { ReactNode } from 'react';
import styles from './css/TarjetaAnimate.module.css'

interface TarjetaVehiculoProps{
    children?: ReactNode;
    css?:string;
}
export const DivAnimateLinea:React.FC<TarjetaVehiculoProps> = ({children,css}) => {
  return (
    <div className={`${styles.trajeta} ${css}`} style={{
    }}>
      <div className="w-[99%] h-[98%] bg-[#1D2432] z-10 p-2 rounded-xl">
        {children}
      </div>
    </div>
  );
};
