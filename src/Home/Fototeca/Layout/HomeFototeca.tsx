import { Element } from "react-scroll"

export const HomeFototeca = () => {
  return (
    <Element name="fototeca">
        <section className=" bg-cover w-full h-screen flex flex-row gap-5 p-10 justify-between items-start">
            {/* opciones */}
            <div className="w-2/3 flex flex-col gap-4">
                <div className="w-full flex h-auto flex-row  bg-[#1D2432] p-4 items-center justify-between">
                    <p className="text-3xl font-bold text-white flex">Personal</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 font-bold">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex h-auto flex-row  bg-[#1D2432] p-4 items-center justify-between">
                    <p className="text-3xl font-bold text-white flex">Instalaciones</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 font-bold">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex h-auto flex-row  bg-[#1D2432] p-4 items-center justify-between">
                    <p className="text-3xl font-bold text-white flex">Entregas</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 font-bold">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
               
            </div>
            {/* fotos */}
            <div className="w-full h-96 border-2 border-green-500 rounded-xl flex items-center justify-center">   
                <img src="./Imagenes/vfinstalaciones.png" alt="Imagen " className="w-full h-full object-contain" />
            </div>
        </section>
  </Element>
  )
}