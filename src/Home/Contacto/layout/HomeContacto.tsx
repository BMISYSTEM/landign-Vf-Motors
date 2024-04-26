import { Element } from "react-scroll"

export const HomeContacto = () => {
  return (
    <Element name="contactenos">
        <section className="w-full h-screen flex flex-col gap-3  justify-center items-center p-2">
            <form action="" className="md:w-1/3 w-full h-full flex flex-col p-2 gap-2 justify-center">
                <h1 className="text-2xl font-bold text-white text-center mb-10 ">Contactenos</h1>
                <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-slate-200">Nombre</label>
                        <input type="text" placeholder="Nombre" className="p-2 w-full  rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-slate-200">Apellido</label>
                        <input type="text" placeholder="Apellido" className="p-2 w-full  rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"/>
                    </div>
                </div>
                <label htmlFor="" className="text-slate-200 text-left">Email</label>
                <input type="text" placeholder="Apellido" className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"/>
                <label htmlFor="" className="text-slate-200 text-left">Numero Telefonico</label>
                <input type="text" placeholder="Telefono" className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"/>
                <label htmlFor="" className="text-slate-200 text-left">Mensaje</label>
                <textarea rows={5} className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200">
                    {/* mensaje */}
                </textarea>
                <div className="flex justify-start">
                    <input type="submit" value={'Enviar Mensaje'} className="text-xl mt-10 flex  text-white font-bold p-2 bg-[#6366F1] cursor-pointer hover:bg-[#6366F1]/60 hover:border-2 hover:border-slate-300 hover:scale-110 transition-all" />
                </div>
            </form>
        </section>
    </Element>
  )
}
