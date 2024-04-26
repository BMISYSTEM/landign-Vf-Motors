import { Outlet, Link } from 'react-router-dom';
import { Aside } from './Components/Aside';

export const PanelLayout= () => {
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
            <section>
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
