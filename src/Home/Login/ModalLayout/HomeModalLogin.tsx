import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from "react-router-dom";

export const HomeModalLogin = () => {
    const {modalLogin,setModalLogin} = useContext(HomeContext)
    const nav = useNavigate()
    const handleclickLogin:React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        nav('/panel')
    }
  return (
    <section className="bg-slate-950 w-80 p-2 z-[99999999999999999999999999999999] h-auto flex flex-col gap-2 rounded-sm shadow-xl shadow-green-500  border-2 border-green-600">
      <div className="w-full h-auto  flex flex-row justify-end items-center">
        <button onClick={()=>setModalLogin(!modalLogin)}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white hover:scale-110 hover:text-red-500 transition-all"
            >
            <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
            />
            </svg>
        </button>
      </div>
      <h1 className="text-2xl text-center font-bol text-slate-300 mb-5">
        Login
      </h1>
      <form
        action=""
        onSubmit={handleclickLogin}
        className="w-full h-auto p-2 flex flex-col gap-4 text-slate-300"
      >
        {/* <label htmlFor="">Usuario</label> */}
        <div className="w-full flex flex-row relative items-center rounded-lg">
          <div className="absolute  h-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="email"
            className="p-2 w-full rounded-sm pl-7 text-slate-700"
            placeholder="Digita tu Email/Correo"
          />
        </div>
        <div className="w-full flex flex-row relative items-center rounded-lg">
          <div className="absolute  h-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="password"
            className="p-2 w-full rounded-sm pl-7 text-slate-700"
            placeholder="Password/Contraseña"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 p-2 text-white font-bold rounded-sm"
        >
          Ingresar
        </button>
      </form>
    </section>
  );
};
