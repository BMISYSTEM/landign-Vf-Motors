export const PanelContactenos = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 p-2">
      <h1 className="text-3xl font-bold text-slate-300 text-center">
        Contactos
      </h1>
      <table>
        <thead>
          <tr className="w-full text-white text-center bg-sky-800">
            <td>Fecha de contacto</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Telefono</td>
            <td>Email</td>
            <td>Mensaje</td>
            <td>Marcar como leido</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-slate-300  text-center hover:bg-sky-500">
            <td>20/12/24</td>
            <td>Bayron</td>
            <td>Meneses</td>
            <td>3184482848</td>
            <td>baironmenesesidarraga.990128@gmail.com</td>
            <td>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In{" "}
            </td>
            <td className="p-2">
              <button className="p-2 text-white bg-green-500 rounded-sm shadow-lg shadow-green-300">
                Leido
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
