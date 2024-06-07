import React, { ChangeEvent, useState } from "react";
import useHeadre, { respuesta } from "../hooks/useHeadre";
export const PanelBanner = () => {
  // estados de los inputs
  const [titulo, setTitulo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const { updateImagen, updateText } = useHeadre();
  const [respuesta, setRespuesta] = useState<respuesta>();
  const [error, setError] = useState<any | null>();
  const [loading, setLoading] = useState<boolean>(false);

  // funcion para guardar imagen en backend
  const handleImagenChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const datos = {
        imagen: file,
      };
      const foto = new FormData();
      foto.append("imagen", file);
      // ejecutar el request
      setLoading(true);
      await updateImagen(datos, setRespuesta, setError);
      setLoading(false);
    }
  };

  // envio de campos de textos

  const handleClockFormulario: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const datos = {
      titulo: titulo,
      descripcion: descripcion,
    };
    setLoading(true);
    await updateText(datos, setRespuesta, setError);
    setLoading(false);
  };
  if(respuesta?.succes)
    {
      if(error) setError(null);
    }
  return (
    <section className="w-full h-full flex flex-col  items-center  overflow-hidden  p-2 gap-5">
      <div className="w-full h-20 ">
        <h1 className="text-3xl text-slate-300">Informacion del header</h1>
      </div>
      {/* mensaje de guardado correcto */}
      {respuesta?.succes ? (
        <p className="text-sm text-green-500 text-center">
          {respuesta?.succes}
        </p>
      ) : null}
      {/* mensaje cargando  */}
      <p
        className={`${
          loading ? "" : "hidden "
        } text-lg text-green-500 text-center animate-bounce`}
      >
        Enviando al servidor...
      </p>
      {/* imagen de fondo */}
      <div className="w-1/2 h-auto flex flex-row text-slate-300">
        <form action="" className="flex flex-row gap-2 text-slate-300">
          <label htmlFor="" className="font-bold">
            Imagen de fondo
          </label>
          <input
            type="file"
            onChange={handleImagenChange}
            accept="video/mp4"
          />
          {/* mense de errores en la imagen  */}
          {error?.errors?.imagen ? (
            <p className="text-sm text-red-500 text-center">
              {error?.errors?.imagen[0]}
            </p>
          ) : null}
        </form>
      </div>
      {/* textos */}
      <div className="w-1/2 h-auto flex flex-col border-t p-2 gap-5">
        <h2 className="text-slate-300 text-3xl">Informacion principal</h2>
        <form
          action=""
          onSubmit={handleClockFormulario}
          className="flex flex-col gap-2 text-slate-300"
        >
          <label htmlFor="" className="font-bold">
            Titulo principal
          </label>
          <input
            type="text"
            className="bg-[#1D2432] text-slate-300 border p-2 rounded-xl"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {error?.errors?.titulo ? (
            <p className="text-sm text-red-500 text-center">
              {error?.errors?.titulo[0]}
            </p>
          ) : null}
          <label htmlFor="" className="font-bold">
            Descripcion
          </label>
          <input
            type="text"
            className="bg-[#1D2432] text-slate-300 border p-2 rounded-xl"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          {error?.errors?.descripcion ? (
            <p className="text-sm text-red-500 text-center">
              {error?.errors?.descripcion[0]}
            </p>
          ) : null}
          <input
            type="submit"
            value={"Guardar"}
            className="p-2 border bg-green-500  text-white font-bold hover:opacity-70 cursor-pointer transition-all"
          />
        </form>
      </div>
    </section>
  );
};
