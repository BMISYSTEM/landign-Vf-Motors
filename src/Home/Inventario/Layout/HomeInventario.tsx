import { Element } from 'react-scroll'
// import { Respuesta, useInventario } from '../Hooks/useInventario';
// import { useEffect, useState } from 'react';

export const HomeInventario = () => {
    // const { allVehiculo } = useInventario();
    // const [vehiculos, setVehiculos] = useState<Respuesta[]>([]);

    // useEffect(() => {
    //     const fetchVehiculos = async () => {
    //         try {
    //             const respuesta: Respuesta = await allVehiculo();
    //             setVehiculos(respuesta);
    //         } catch (error) {
    //             console.error('Error obteniendo vehículos:', error);
    //         }
    //     };

    //     fetchVehiculos();
    // }, []);
    // console.log(vehiculos[0].id)
  return (
    <Element name='inventario'>
        <section className='w-full h-screen flex flex-col gap-5 p-5'>
            <h5 className='text-3xl font-bold text-white text-center'>Inventario</h5>
            {/* inventario y filtros */}
            <section className='w-full h-full flex flex-row gap-5 p-5'>
            {/* filtros */}
                <div className='bg-[#1D2432] w-60 h-full border-2 border-green-500 flex flex-col gap-5 rounded-lg'>

                </div>
            {/* resultado */}
                <div className='w-full h-full grid grid-cols-4 gap-5'>
                    <div className='w-60 h-80 border-2 border-green-500 rounded-lg flex flex-col bg-[#1D2432]'>
                        {/* imagenes */}
                        <div className=''>

                        </div>
                        {/* datos vehiculo */}
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    </Element>
  )
}
