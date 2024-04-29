

export const PanelVision = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 items-center ">
        <h1 className="text-3xl font-bold text-slate-300">Imagen Vision</h1>
        <form action="" className="w-1/2 flex flex-col gap-3">
            <label htmlFor="" className="text-slate-300">Selecione la nueva Imagenes</label>
            <input type="file" accept="imagen/png, imagen/jpg" />
            <input type="submit" value={'Guardar imagen'} className="text-white p-2 border bg-green-500 hover:opacity-70 cursor-pointer transition-all"/>
        </form>
    </section>
  )
}
