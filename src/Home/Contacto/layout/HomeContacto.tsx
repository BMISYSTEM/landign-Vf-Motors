import axios, { isAxiosError } from "axios";
import React, { useState } from "react";
import { Element } from "react-scroll";
import wpp from '../assets/whatsapp.png'
import apagado from '../assets/apagado.png'
import prendido from '../assets/prendido.png'
import { Link } from "react-router-dom";
export interface Errors {
    message: string;
    errors:  ErrorsClass;
}

export interface ErrorsClass {
    nombre:   string[];
    apellido: string[];
    mensaje:  string[];
}
export interface Succes {
    succes: string;
}

export const HomeContacto = () => {
  const url = import.meta.env.VITE_API_URL;
  const [nombre, setNombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [validacionCampos, setValidacionCampos] = useState(false);
  const [cargando, setcargando] = useState(false);
  const [respuesta, setRespuesta] = useState<Succes |null>(null);
  const [error, setError] = useState<Errors | null>();
  const [pregunta,setPregunta] = useState<boolean>(false)
  const [reclamo,setreclamo] = useState<boolean>(false)
  const [queja,setqueja] = useState<boolean>(false)
  const [sugerencia,setsugerencia] = useState<boolean>(false)
  const handleclickForm: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    if (!(nombre && apellido && email && telefono && mensaje)) {
      setValidacionCampos(true);
      return;
    }
    setValidacionCampos(false)
    setError(null)
    setcargando(true);
    const datos = {
      nombre,
      apellido,
      email,
      telefono,
      mensaje,
    };
    try {
      const { data } = await axios.post(`${url}/createcontacto`, datos);
      setRespuesta(data);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        setError(error.response.data);
      }
    }
    setcargando(false);
  };
  return (
    <Element name="contactenos">
      <section className="w-full h-full flex flex-col gap-3  justify-center items-center p-2 mt-10">
          <p className="w-full text-2xl font-bold text-white text-center ">
            Contacta a un asesor
          </p>
          <Link to={"https://wa.me/message/IH5SZDTONQ5MK1"} className="text-white md:w-1/2 w-full  font-bold text-xl border-2 border-green-500 bg-green-500/50 hover:scale-105 transition-all p-2 flex flex-row gap-4 justify-center">
            <img src={wpp} alt="" className="w-8 h-8" />
            <p>Whatsapp</p>
          </Link>
          <p className="text-lg text-slate-200 ">Digita todos los campos obligatorios y selecciona una opcion que desees.</p>
          
          <div className="w-full md:w-1/2 flex flex-row gap-5 justify-between items-center">
            <button onClick={()=>{
              setPregunta(!pregunta)
              setreclamo(false)
              setqueja(false)
              setsugerencia(false)
              }} className="flex flex-col gap-2 justify-center items-center">
              <p className="text-lg font-bold text-slate-200">Pregunta</p>
              {pregunta ? 
                <img src={prendido} alt="" />
              :
                <img src={apagado} alt="" />
              }
            </button>
            <button onClick={()=>{
              setPregunta(false)
              setreclamo(!reclamo)
              setqueja(false)
              setsugerencia(false)
            }} className="flex flex-col gap-2 justify-center items-center">
              <p className="text-lg font-bold text-slate-200">Reclamo</p>
              {reclamo ? 
                <img src={prendido} alt="" />
              :
                <img src={apagado} alt="" />
              }
            </button>
            <button onClick={()=>{
              setPregunta(false)
              setreclamo(false)
              setqueja(!queja)
              setsugerencia(false)
            }} className="flex flex-col gap-2 justify-center items-center">
              <p className="text-lg font-bold text-slate-200">Queja</p>
              {queja ? 
                <img src={prendido} alt="" />
              :
                <img src={apagado} alt="" />
              }
            </button>
            <button onClick={()=>{
              setPregunta(false)
              setreclamo(false)
              setqueja(false)
              setsugerencia(!sugerencia)
            }} className="flex flex-col gap-2 justify-center items-center">
              <p className="text-lg font-bold text-slate-200">Sugerencia</p>
              {sugerencia ? 
                <img src={prendido} alt="" />
              :
                <img src={apagado} alt="" />
              }
            </button>

          </div>
        <form
          onSubmit={handleclickForm}
          action=""
          className="md:w-1/3 w-full h-full flex flex-col p-2 gap-2 justify-center"
        >
          <p className={`${respuesta?.succes ? null : 'hidden '} text-green-500 text-center`}>{respuesta?.succes}</p>
          
          
        <p className={`${cargando ? null : 'hidden '} text-green-500 animate-bounce text-center`}>Enviando...</p>
          <p
            className={`${
              validacionCampos ? null : "hidden"
            }  text-red-500 text-center`}
          >
            Diligencie todos los campos del formulario
          </p>
          <div className="w-full flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-200">
                Nombre
              </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
                placeholder="Nombre"
                className="p-2 w-full  rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"
              />
            <p className={`${error?.errors?.nombre ? null : 'hidden '} text-red-500 text-center`}>{error?.errors?.nombre}</p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-200">
                Apellido
              </label>
              <input
                onChange={(e) => setapellido(e.target.value)}
                value={apellido}
                type="text"
                placeholder="Apellido"
                className="p-2 w-full  rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"
              />
              <p className={`${error?.errors?.apellido ? null : 'hidden '} text-red-500 text-center`}>{error?.errors?.apellido}</p>
            </div>
          </div>
          <label htmlFor="" className="text-slate-200 text-left">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"
          />

          <label htmlFor="" className="text-slate-200 text-left">
            Numero Telefonico
          </label>
          <input
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            type="number"
            placeholder="Telefono"
            className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"
          />
          
          <label htmlFor="" className="text-slate-200 text-left">
            Mensaje
          </label>
          <textarea
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
            rows={5}
            className="p-2 w-full rounded-lg border-2 border-slate-300 bg-[#1D2432] text-slate-200"
          >
            {/* mensaje */}
          </textarea>
          <p className={`${error?.errors?.mensaje ? null : 'hidden '} text-red-500 text-center`}>{error?.errors?.mensaje}</p>

          <div className="flex justify-start">
            <input
              type="submit"
              value={"Enviar Mensaje"}
              className="text-xl mt-10 flex  text-white font-bold p-2 bg-[#6366F1] cursor-pointer hover:bg-[#6366F1]/60 hover:border-2 hover:border-slate-300 hover:scale-110 transition-all"
            />
          </div>
        </form>
      </section>
    </Element>
  );
};
