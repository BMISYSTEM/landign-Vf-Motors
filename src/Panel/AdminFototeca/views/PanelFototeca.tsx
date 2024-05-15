import React, { ChangeEvent, useState } from "react";
import useFototeca, { Error } from "../hooks/useFototeca";
import { Data, res } from "../Interfaces/FototecaInterface";
interface loading{
    active:boolean,
    mesage:string
}
export const PanelFototeca = () => {
  const urlImage = import.meta.env.VITE_API_URL_IMAGE;
  const { saveImagen, data, isLoading,deleteImagen } = useFototeca();
  // estado de los inputs
  const [imagen, setImagen] = useState<File | undefined>();
  const [seccion, setSeccion] = useState<number | undefined>();
  // estados de http
  const [respuesta, setRespuesta] = useState<res | null>();
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<loading>({active:false,mesage:''});
  const saveImagenOnState = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImagen(e.target.files[0]);
    }
  };
  const handleClickForm: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const datos = {
      imagen: imagen,
      seccion: seccion,
    };
    setLoading({
        active:true,
        mesage:'Guardando imagen en la fototeca'
    });
    setRespuesta(null)
    await saveImagen(datos, setRespuesta, setError);
    setLoading({
        active:false,
        mesage:''
    });
  };
  const handleClickdeleteImagen = async(id:number) =>{
    // se debe mandar mensaje alertando que se esta eliminando 
    const datos = {
        id:id
    }
    setLoading({
        active:true,
        mesage:'Eliminando foto de la lista'
    })
    setRespuesta(null)
    await deleteImagen(datos,setRespuesta,setError);
    setLoading({
        active:false,
        mesage:''
    })
  }
  if (respuesta?.succes) {
    if (error) setError(null);
  }
  const index: Data = data?.data;
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2 overflow-auto ">
      <h1 className="text-3xl font-bold text-slate-300 text-center">
        Fototeca
      </h1>
      <p
        className={`${
          loading.active ? "" : "hidden"
        } text-sm text-center text-green-500 animate-bounce`}
      >
        {loading.mesage}
      </p>
      <p
        className={`${
          respuesta?.succes ? "" : "hidden"
        } text-sm text-center text-green-500 `}
      >
        {respuesta?.succes}
      </p>

      <div className="w-full h-full flex flex-row gap-2 ">
        {/* FORMULARIO */}
        <div className="w-1/3 p-2 h-full flex flex-col gap-2">
          <form
            action=""
            onSubmit={handleClickForm}
            className="flex flex-col gap-5 text-slate-300"
          >
            <label htmlFor="">Seleccione imagen acargar</label>
            <input
              type="file"
              onChange={saveImagenOnState}
              accept="imagen/png, imagen/jpeg"
            />
            <p
              className={`${
                error?.errors?.imagen ? "" : "hidden"
              } text-sm text-center text-red-500 `}
            >
              {error?.errors?.imagen ? error?.errors?.imagen[0] : null}
            </p>
            <select
              name=""
              id=""
              value={seccion}
              onChange={(e) => setSeccion(Number(e.target.value))}
              className="p-2 rounded-xl border text-slate-300 bg-[#1D2432]"
            >
              <option value="1">Personal</option>
              <option value="2">Instalaciones</option>
              <option value="3">Entraga</option>
            </select>
            <p
              className={`${
                error?.errors?.seccion ? "" : "hidden"
              } text-sm text-center text-red-500 `}
            >
              {error?.errors?.seccion ? error?.errors?.seccion[0] : null}
            </p>
            <input
              type="submit"
              value={"Guardar imagen"}
              className="p-2 text-white border-2 bg-green-500 font-bold hover:opacity-70 cursor-pointer transition-all"
            />
          </form>
        </div>
        {/* LISTA DE IMAGENES */}
        <div className="w-full h-auto  flex flex-col gap-2   ">
          {isLoading ? (
            <p className="text-green-500 text-center text-2xl font-bold animate-bounce">
              {" "}
              Cargando listado de datos...
            </p>
          ) : (
            <table>
              <thead>
                <tr className="w-full text-slate-300 text-center bg-sky-800">
                  <td>Clasificacion</td>
                  <td>Imagen</td>
                  {/* <td>Fecha</td> */}
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {index?.succes?.map((data) => (
                  <tr className="text-slate-300 text-center border-b">
                    <td>
                      {data.seccion === 1
                        ? "Personal"
                        : data.seccion === 2
                        ? "Instalaciones "
                        : data.seccion === 3
                        ? "Entregas"
                        : null}
                    </td>
                    <td className="w-60 h-60">
                      <img
                        src={`${urlImage}${data.imagen}`}
                        alt=""
                        className="object-contain w-full h-full"
                      />
                    </td>
                    {/* <td>{data.created_at}</td> */}
                    <td className="p-2">
                      <button onClick={()=>handleClickdeleteImagen(data.id)} className="p-2 bg-red-500 rounded-xl shadow-lg shadow-red-300 hover:opacity-70 transition-all">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
