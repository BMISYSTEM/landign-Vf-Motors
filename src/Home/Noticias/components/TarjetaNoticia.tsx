interface props{
    noticia:string,
    imagen:string,
    titulo:string,
}
export const TarjetaNoticia = ({imagen = '',noticia,titulo}:props) => {
  return (
    <div className="w-96 h-auto flex flex-col gap-2  p-2 border rounded-sm shadow-xl shadow-green-500/10 ">
                {/* titulo */}
                <div className="w-full h-auto ">
                    <p className="text-2xl font-bold text-white">{titulo}</p>
                </div>
                {/* imagen noticia */}
                <div className="w-full h-40 bg-slate-300">
                    {imagen}
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
