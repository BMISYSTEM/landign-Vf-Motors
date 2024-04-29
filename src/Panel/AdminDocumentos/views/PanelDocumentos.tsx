
export const PanelDocumentos = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 items-center">
        <h1 className="text-3xl text-slate-300 font-bold">Documentos</h1>
        <form action="" className="w-1/3 flex flex-col text-slate-300 gap-3">
            <label htmlFor="">Terminos y condicciones</label>
            <input type="file" />
            <label htmlFor="">Manejo de cookies</label>
            <input type="file" />
            <label htmlFor="">Manejo de datos privados</label>
            <input type="file" />
        </form>
    </section>
  )
}
