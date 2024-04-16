import { Navar } from './Components/Navar';
import { Header } from './Components/Header';
export const LayoutHeader = () => {
  return (
    <section className="w-full flex flex-col ">
        {/* barra de navegacion */}
        <Navar/>
        {/* imagen header o banner  */}
        <Header/> 
    </section>
  )
}
