interface props{
    noticia:string,
    imagen:string,
    titulo:string,
    fecha:Date
}
export const TarjetaNoticia = ({imagen = '',noticia,titulo,fecha}:props) => {
  return (
    <div className="w-full h-full flex flex-row gap-2  p-2 border rounded-sm shadow-xl shadow-green-500/10 ">
                {/* titulo */}
                <div>
                    <div className="w-full h-auto flex flex-col gap-3 ">
                        <p className="text-2xl font-bold text-white">{titulo}</p>
                        <p className="text-sm text-slate-300">{fecha.toString()}</p>
                    </div>
                    {/* texto de la noticia */}
                    <div className="w-full h-auto mt-10 ">
                        <p className="text-slate-300 text-justify">
                            {noticia}
                        </p>
                    </div>

                </div>
                {/* imagen noticia */}
                <div className="w-full h-full  overflow-hidden rounded-lg">
                    <img src={imagen} alt="" className="object-contain w-full  h-full" />
                </div>
            </div>
  )
}
