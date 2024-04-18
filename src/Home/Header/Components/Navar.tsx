import { Link } from "react-scroll";
import logo from "../Assets/logo.png";

export const Navar = () => {
  return (
    <nav className="w-full h-20 bg-black flex flex-row gap-4 p-2 items-center justify-between">
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
      <Link
        to={"inventario"}
        smooth={true}
        duration={700}
        className="text-sm  text-white"
      >
         <button className="hover:border-b-2 hover:border-green-500">
            Inventario
        </button>
      </Link>
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
      <Link to={"contactenos"} className="text-sm  text-white">
      <button className="hover:border-b-2 hover:border-green-500">
            Contactenos
        </button>
      </Link>
      <button
        className="p-2 text-lg font-bold text-white bg-green-500 rounded-lg border-2 border-white
    hover:bg-green-700 hover:scale-105 transition-all"
      >
        Login
      </button>
    </nav>
  );
};
