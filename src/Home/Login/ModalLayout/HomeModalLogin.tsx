

export const HomeModalLogin = () => {
  return (
    <section className="bg-slate-950 w-80 p-2 z-[99999999999999999999999999999999] h-auto flex flex-col gap-2 rounded-xl  border-2 border-green-600">
        <h1 className="text-xl font-bol text-slate-300">Digita tu usuario y contraseña</h1>
        <form action="" className="w-full h-auto p-2 flex flex-col gap-2 text-slate-300">
            <label htmlFor="">Usuario</label>
            <input type="text" />
            <label htmlFor="">Contraseña</label>
            <input type="text" />
            <div className="flex flex-row">
                <button type="submit" className="bg-green-500 p-2 text-white font-bold rounded-sm">
                    Ingresar
                </button>
            </div>
        </form>
    </section>
  )
}
