

export const PanelBanner = () => {
  return (
    <section className="w-full h-full flex flex-col  items-center  overflow-hidden  p-2 gap-5">
        <div className="w-full h-20 ">
          <h1 className="text-3xl text-slate-300">Informacion del header</h1>
        </div>
        {/* imagen de fondo */}
        <div  className="w-1/2 h-auto flex flex-row text-slate-300">
          <form action="" className="flex flex-row gap-2 text-slate-300">
            <label htmlFor="" className="font-bold">Imagen de fondo</label>
            <input type="file" accept="image/png, image/jpeg" />
          </form>
        </div>
        {/* textos */}
        <div  className="w-1/2 h-auto flex flex-col border-t p-2 gap-5">
          <h2 className="text-slate-300 text-3xl">Informacion principal</h2>
          <form action="" className="flex flex-col gap-2 text-slate-300">
            <label htmlFor="" className="font-bold">Titulo principal</label>
            <input type="text"  />
            <label htmlFor="" className="font-bold">Descripcion</label>
            <input type="text"  />
            <input type="submit" value={'Guardar'} 
            className="p-2 border bg-green-500  text-white font-bold hover:opacity-70 cursor-pointer transition-all"/>
          </form>
        </div>
    </section>
  )
}
