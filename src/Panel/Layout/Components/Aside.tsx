import { NavLink } from "react-router-dom"

export const Aside = () => {
  return (
    <aside className="w-1/6 h-full  flex flex-col gap-2 border-r p-2">
        <NavLink to={'/panel/banner'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Banner Principal
            </button>
        </NavLink>
        <NavLink to={'/panel/mision'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Mission
            </button>
        </NavLink>
        <NavLink to={'/panel/vision'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                vision
            </button>
        </NavLink>
        <NavLink to={'/panel/fototeca'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Fototeca
            </button>
        </NavLink>
        <NavLink to={'/panel/testimonios'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Testimonios
            </button>
        </NavLink>
        <NavLink to={'/panel/contactos'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Solicitud de Contacto
            </button>
        </NavLink>
        <NavLink to={'/panel/noticias'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Noticias
            </button>
        </NavLink>
        <NavLink to={'/panel/documentos'}>
            <button className="p-2 text-lg font-bold text-slate-300 text-left w-full border rounded-xl hover:bg-green-500/70 transition-all">
                Documentos
            </button>
        </NavLink>
    </aside>
  )
}
