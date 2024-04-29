export const PanelNoticias = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-5 p-2 overflow-auto">
      <h1 className="text-3xl fotn-bold text-slate-300 text-center">
        Creacion de noticias
      </h1>
      <div className="w-full  flex flex-row gap-2 ">
        {/* formulario */}
        <form
          action=""
          className="w-1/3 h-full flex flex-col gap-5 text-slate-300 p-2"
        >
          <label htmlFor="">Titulo</label>
          <input type="text" className="border rounded-xl bg-[#1D2432] p-2" />
          <label htmlFor="">Imagen</label>
          <input type="file" />
          <label htmlFor="">Noticia</label>
          <textarea
            name=""
            id=""
            className="border rounded-xl bg-[#1D2432] p-2"
          ></textarea>
          <input
            type="submit"
            className="border p-2 bg-green-500 text-white font-bold cursor-pointer hover:opacity-70 transition-all"
          />
        </form>
        {/* lista de noticias */}
        <div className="w-full  overflow-auto">
          <table className="w-full text-center">
            <thead>
              <tr className=" w-full bg-sky-800 text-white ">
                <td>Fecha</td>
                <td>Titulo</td>
                <td>Imagen</td>
                <td>Noticia</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white text-center border-b">
                <td>01/01/24</td>
                <td>Primera noticia</td>
                <td>imagen</td>
                <td className="w-96 h-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  illum odio similique sint corporis. Deserunt explicabo, quod
                  laboriosam neque sunt odio at dolores voluptate perferendis
                  blanditiis molestias distinctio animi voluptatem!
                </td>
                <td className="">
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-sky-500 m-2">
                    Editar
                  </button>
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-red-500 m-2">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className="text-white text-center border-b">
                <td>01/01/24</td>
                <td>Primera noticia</td>
                <td>imagen</td>
                <td className="w-96 h-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  illum odio similique sint corporis. Deserunt explicabo, quod
                  laboriosam neque sunt odio at dolores voluptate perferendis
                  blanditiis molestias distinctio animi voluptatem!
                </td>
                <td className="">
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-sky-500 m-2">
                    Editar
                  </button>
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-red-500 m-2">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className="text-white text-center border-b">
                <td>01/01/24</td>
                <td>Primera noticia</td>
                <td>imagen</td>
                <td className="w-96 h-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  illum odio similique sint corporis. Deserunt explicabo, quod
                  laboriosam neque sunt odio at dolores voluptate perferendis
                  blanditiis molestias distinctio animi voluptatem!
                </td>
                <td className="">
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-sky-500 m-2">
                    Editar
                  </button>
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-red-500 m-2">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className="text-white text-center border-b">
                <td>01/01/24</td>
                <td>Primera noticia</td>
                <td>imagen</td>
                <td className="w-96 h-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  illum odio similique sint corporis. Deserunt explicabo, quod
                  laboriosam neque sunt odio at dolores voluptate perferendis
                  blanditiis molestias distinctio animi voluptatem!
                </td>
                <td className="">
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-sky-500 m-2">
                    Editar
                  </button>
                  <button className="p-2 text-white font-bold hover:opacity-70 transition-all bg-red-500 m-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
