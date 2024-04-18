import  { useState } from 'react'
import derecha from '../assets/derecha.svg'
import izquierda from '../assets/izquierda.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'animate.css'
import loading from '../../../Assets/loading.gif'
interface imagen{
    foto1:string,
    foto2:string,
    foto3:string,
    foto4:string,
}
// img sera un arreglo de imagenes
export const Imagenes = (imagenes:imagen) => {
  const [visible,SetVisible] = useState(3)
  const moveimagen = (numero:number) =>{
    console.log('se mueve')
    if(numero > 0){
        if(visible === 3){
            SetVisible(0) 
        }else{
            SetVisible(visible + 1)
        }
    }else{
        if(visible === 0){
            SetVisible(3)
        }else{
            SetVisible(visible - 1)
        }
    }
  }
  return (
    <div className='w-full h-44 bg-[#1D2432] mt-2 flex flex-row overflow-hidden rounded-lg relative justify-between'>
         <div className='w-1/2 h-full  flex items-center justify-start '>
            <button className='hover:scale-110 transition' onClick={()=>moveimagen(1)}>
                <img src={izquierda} alt="" className='w-6 h-6' />
            </button>
        </div>
        
        <LazyLoadImage src={imagenes.foto1}  key={imagenes.foto1} alt='imagen' className={`${visible === 0 ? "" : " hidden"} w-[80%] h-full rounded-xl `}  />
        <LazyLoadImage src={imagenes.foto2}  key={imagenes.foto2} alt='imagen' className={`${visible === 1 ? "" : " hidden"} w-[80%] h-full rounded-xl `}  />
        <LazyLoadImage src={imagenes.foto3}  key={imagenes.foto3} alt='imagen' className={`${visible === 2 ? "" : " hidden"} w-[80%] h-full rounded-xl `}  />
        <LazyLoadImage src={imagenes.foto4}  key={imagenes.foto4} alt='imagen' className={`${visible === 3 ? "" : " hidden"} w-[80%] h-full rounded-xl `}  />
        {/* <p className='text-xl font-bold text-red'>{visible}</p> */}
        <div className='w-1/2 h-full  flex items-center justify-end  '>
            <button className='hover:scale-110 transition' onClick={()=>moveimagen(-1)}>
                <img src={derecha} alt="" className='w-6 h-6' />
            </button>
        </div>
    </div>
  )
}
