import { Outlet, Link } from 'react-router-dom';
import { Aside } from './Components/Aside';
import { useAuth } from './hooks/useAuth';

export const PanelLayout= () => {
  const {isLoading} = useAuth()
  if(isLoading)
    {
      return(
        <div className='w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center'>
          <p className=' text-3xl text-green-300 text-center animate-ping'>Comprobando Credenciales...</p>
        </div>
      )
    }
  return (
    <section className="w-full h-screen overflow-hidden bg-slate-950 flex flex-col">
        {/* cabecera */}
        <header className="w-full h-14 ">
          {/* logo de la empresa */}
          <Link to={"/"} className="w-full">
            <img
              src="/Imagenes/logo.png"
              alt="Logo de la empresa"
              className="w-32 h-auto"
            />
          </Link >
        </header>
        {/* contenido */}
        <main className="w-full h-full  flex flex-row">
            <Aside/>
            <section className='w-full h-[98%] overflow-hidden'>
                <Outlet/>
            </section>
        </main>
        {/* footer version */}
        <footer className="w-full h-10 border-t">
            <p className="text-center text-slate-300 text-sm ">Version: 1.00.00</p>
            <p className="text-center text-slate-300 text-sm ">Desarrollado: Syprods</p>
        </footer>
    </section>
  )
}
