import { TarjetaNoticia } from "../components/TarjetaNoticia";
import { Link } from 'react-router-dom';

export const HomeNoticias = () => {
  return (
    <section className="w-full h-screen flex flex-col  gap-2 bg-slate-950 items-center  ">
        <div className="w-full h-10  flex flex-row justify-between">
          {/* logo de la empresa */}
          <Link to={"/"} className="w-full">
            <img
              src="/Imagenes/logo.png"
              alt="Logo de la empresa"
              className="w-48 h-auto"
            />
          </Link>
        </div>
      <h1 className="text-3xl font-bold text-slate-300">Noticias</h1>
      {/* noticias */}
      <section className="w-full h-full  flex flex-row flex-wrap gap-5 overflow-auto p-3 justify-center items-start">
        {/* tarjeta de noticia */}
        <TarjetaNoticia 
        imagen="imagn1" 
        noticia=" as empresas de servicios públicos de Acueducto y la compañía de energía Enel Codensa han anunciado la realización de cortes programados en sus servicios para el este martes 23 de abril.
                Estas interrupciones temporales se llevarán a cabo con el objetivo de racionar agua frente a la crisis crítica en los embalses y mantenimiento en el servicio eléctrico.
                ​(También: Los cortes de luz para este martes 23 de abril en Bogotá: direcciones y horas de restablecimiento).
                La compañía Enel informó que el tiempo de suspensión se dará de acuerdo al trabajo que se realice. Los cortes de energía pueden durar de dos a ocho horas, por ello, es importante que esté prevenido para que no afecte su día cotidiano.
                Asimismo, recuerde que el racionamiento del servicio de agua iniciará a las 8 a.m. y durará 24 horas. " 
        titulo="Pilas: estos son los barrios de Bogotá que tendrán cortes de agua y luz al tiempo este martes 23 de abril"
        key={1}
        />
        <TarjetaNoticia 
        imagen="imagn1" 
        noticia=" as empresas de servicios públicos de Acueducto y la compañía de energía Enel Codensa han anunciado la realización de cortes programados en sus servicios para el este martes 23 de abril.
                Estas interrupciones temporales se llevarán a cabo con el objetivo de racionar agua frente a la crisis crítica en los embalses y mantenimiento en el servicio eléctrico.
                ​(También: Los cortes de luz para este martes 23 de abril en Bogotá: direcciones y horas de restablecimiento).
                La compañía Enel informó que el tiempo de suspensión se dará de acuerdo al trabajo que se realice. Los cortes de energía pueden durar de dos a ocho horas, por ello, es importante que esté prevenido para que no afecte su día cotidiano.
                Asimismo, recuerde que el racionamiento del servicio de agua iniciará a las 8 a.m. y durará 24 horas. " 
        titulo="Pilas: estos son los barrios de Bogotá que tendrán cortes de agua y luz al tiempo este martes 23 de abril"
        key={1}
        />
      </section>
    </section>
  );
};
