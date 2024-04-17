
interface props{
  marca:string,
  linea:string,
  version:string,
  modelo:string,
  caja:string,
  placa:string,
  soat?:Date,
  tecno?:Date,
  valor:string,
}

export const DatosVehiculo = ({marca,linea,version,modelo,caja,placa,valor}:props) => {
  return (
    <section className='w-full h-44  flex flex-col p-2 justify-between'>
        <p className='text-sm font-bold text-slate-200'>Valor   :  <span className='text-2xl '>$ {valor}</span>       </p>
        <p className='text-sm font-bold text-slate-200'>Marca   : {marca}  </p>
        <p className='text-sm font-bold text-slate-200'>Linea   : {linea}  </p>
        <p className='text-sm font-bold text-slate-200'>Version : {version}</p>
        <p className='text-sm font-bold text-slate-200'>Modelo  : {modelo} </p>
        <p className='text-sm font-bold text-slate-200'>Caja    : {caja}   </p>
        <p className='text-sm font-bold text-slate-200'>Placa   : {placa}  </p>
    </section>
  )
}
