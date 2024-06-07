interface props{
    noticia:string,
    imagen:string,
    titulo:string,
    fecha:Date
}
export const TarjetaNoticia = ({imagen = '',noticia,titulo,fecha}:props) => {
  return (
    <div className="w-96 h-auto flex flex-col gap-2  p-2 border rounded-lg shadow-xl shadow-green-500/10 ">
                {/* titulo */}
                <div className="w-full h-auto ">
                    <p className="text-2xl font-bold text-white">{titulo}</p>
                    <p className="text-sm text-slate-300">{fecha.toString()}</p>
                </div>
                {/* imagen noticia */}
                <div className="w-full h-40 bg-slate-300 overflow-hidden rounded-lg">
                    <img src={imagen} alt="" className="object-contain w-full  h-full" />
                </div>
                {/* texto de la noticia */}
                <div className="w-full h-auto ">
                    <p className="text-slate-300 text-justify">
                        {noticia}
                    </p>
                </div>
            </div>
  )
}
