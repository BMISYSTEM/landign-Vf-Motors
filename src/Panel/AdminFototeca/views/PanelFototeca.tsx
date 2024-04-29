

export const PanelFototeca = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 ">
        <h1 className="text-3xl font-bold text-slate-300 text-center">Fototeca</h1>
        <div className="w-full h-full flex flex-row gap-2 ">
            {/* FORMULARIO */}
            <div className="w-1/3 p-2 h-full flex flex-col gap-2">
                <form action="" className="flex flex-col gap-5 text-slate-300">
                    <label htmlFor="">Seleccione imagen acargar</label>
                    <input type="file" accept="imagen/png, imagen/jpeg" />
                    <select name="" id="" className="p-2 rounded-xl border text-slate-300 bg-[#1D2432]">
                        <option value="">Personal</option>
                        <option value="">Instalaciones</option>
                        <option value="">Entraga</option>
                    </select>
                    <input type="submit" value={'Guardar imagen'} className="p-2 text-white border-2 bg-green-500 font-bold hover:opacity-70 cursor-pointer transition-all" />
                </form>
            </div>
            {/* LISTA DE IMAGENES */}
            <div className="w-full h-full flex flex-col gap-2 border">
                <table>
                    <thead>
                        <tr className="w-full text-slate-300 text-center bg-sky-800">
                            <td>Clasificacion</td>
                            <td>Imagen</td>
                            <td>Fecha</td>
                            <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-slate-300 text-center border-b">
                            <td>Personal</td>
                            <td>Personal</td>
                            <td>Personal</td>
                            <td className="p-2">
                                <button 
                                className="p-2 bg-red-500 rounded-xl shadow-lg shadow-red-300 hover:opacity-70 transition-all"
                                >Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}
