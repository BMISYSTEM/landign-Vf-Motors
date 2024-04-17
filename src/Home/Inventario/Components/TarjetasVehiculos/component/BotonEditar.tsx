interface props{
  onclick:()=>void;
  disponible:number;
}
export const BotonEditar = ({onclick,disponible = 0}:props) => {
  return (
    <>
    {disponible ? 
      <button 
      onClick={onclick}
      className='p-2 rounded-xl bg-green-500 text-white font-bold shadow-sm shadow-green-300 hover:scale-95 hover:bg-green-700 transition'>
          Editar
      </button>
    :
      <h1 className='text-lg text-red-500 font-bold'>Vehiculo no disponible</h1>
    }
    </>
  )
}
