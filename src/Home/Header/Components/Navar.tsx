import { Link } from "react-scroll";
import { Link as LinkNav } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useContext, useState } from "react";
import { HomeContext } from "../../Context/HomeContext";

export const Navar = () => {
  const [expamNav,setExpanNav] = useState(false)
  const { modalLogin, setModalLogin } = useContext(HomeContext);
  return (
    <>
      <nav className="hidden w-full h-20 bg-black md:flex flex-row gap-4 p-2 items-center justify-between">
        <div className="w-1/2">
          <img src={logo} alt="Logo vf_Motors" className="w-48" />
        </div>
        <Link
          to={"quienes"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Nosotros
          </button>
        </Link>
        <Link
          to={"mision"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Mision
          </button>
        </Link>
        <Link
          to={"vision"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Vision
          </button>
        </Link>
        <Link
          to={"fototeca"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Fototeca
          </button>
        </Link>
        <Link
          to={"servicios"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Servicios
          </button>
        </Link>
        <LinkNav to={"/inventario"} className="text-sm  text-white">
          <button className="hover:border-b-2 hover:border-green-500">
            Inventario
          </button>
        </LinkNav>
        <LinkNav to={"/noticias"} className="text-sm  text-white">
          <button className="hover:border-b-2 hover:border-green-500">
            Noticias
          </button>
        </LinkNav>
        <Link
          to={"testimonios"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Testimonios
          </button>
        </Link>
        <Link
          to={"contactenos"}
          smooth={true}
          duration={700}
          className="text-sm  text-white"
        >
          <button className="hover:border-b-2 hover:border-green-500">
            Contactenos
          </button>
        </Link>
        <button
          onClick={() => setModalLogin(!modalLogin)}
          className="p-2 text-lg font-bold text-white bg-green-500 rounded-lg border-2 border-white
      hover:bg-green-700 hover:scale-105 transition-all"
        >
          Login
        </button>
      </nav>
      {/* navegacion para mobile esta parte solo es visible cuando esta en sm, en md desaparece*/}
      <nav className="md:hidden w-full h-auto bg-black shadow-xl flex items-center text-center flex-col justify-between">
        <button onClick={()=>setExpanNav(!expamNav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div className={`${expamNav ? 'flex' : 'hidden '}  w-full h-screen bg-black flex-col gap-2 items-center  `}>
          <div className="w-1/2">
            <img src={logo} alt="Logo vf_Motors" className="w-48" />
          </div>
          <Link
            to={"quienes"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Nosotros
            </button>
          </Link>
          <Link
            to={"mision"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Mision
            </button>
          </Link>
          <Link
            to={"vision"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Vision
            </button>
          </Link>
          <Link
            to={"fototeca"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Fototeca
            </button>
          </Link>
          <Link
            to={"servicios"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Servicios
            </button>
          </Link>
          <LinkNav to={"/inventario"} className="text-sm  text-white">
            <button className="hover:border-b-2 hover:border-green-500">
              Inventario
            </button>
          </LinkNav>
          <LinkNav to={"/noticias"} className="text-sm  text-white">
            <button className="hover:border-b-2 hover:border-green-500">
              Noticias
            </button>
          </LinkNav>
          <Link
            to={"testimonios"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Testimonios
            </button>
          </Link>
          <Link
            to={"contactenos"}
            smooth={true}
            duration={700}
            className="text-sm  text-white"
          >
            <button className="hover:border-b-2 hover:border-green-500">
              Contactenos
            </button>
          </Link>
          <button
            onClick={() => setModalLogin(!modalLogin)}
            className="p-2 text-lg font-bold text-white bg-green-500 rounded-lg border-2 border-white
      hover:bg-green-700 hover:scale-105 transition-all"
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
};
