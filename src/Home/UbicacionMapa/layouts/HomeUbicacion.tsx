import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Element } from "react-scroll";

export const HomeUbicacion = () => {
  return (
    <Element name="ubicacion" className="w-full flex flex-col items-center justify-center gap-4 mt-10">
      <h4 className=" text-3xl font-bold text-white text-center">Ubicacion</h4>
      <section className="w-full flex md:flex-row flex-col  overflow-hidden ">
        {/* informacion util */}
        <div className="md:w-1/3 w-full flex flex-col gap-2 bg-gray-950 p-2">
          <p className="text-2xl font-bold text-white text-center">VF MOTORS</p>
          <div className="w-full h-auto p-2 flex flex-row  gap-2 items-center">
            {/* logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {/* texto */}
            <p className="text-slate-300 w-full">Concesionario de vehículos usados VHS, Cl. 10 #66a-04, Cali, Valle del Cauca</p>
          </div>

          <div className="w-full h-auto p-2 flex flex-row  gap-2 items-center">
          {/* logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {/* texto */}
            <p>
              <span className="text-green-500 ">Abierto</span>
              <span className="text-slate-300">Cierra a las 6 p.m</span>
            </p>
          </div>
          <div className="w-full h-auto p-2 flex flex-row  items-center gap-2">
          {/* logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
          {/* texto */}
            <p className="text-slate-300">3203394761</p>
          </div>

        </div>
        {/* mapa */}
        <div className="w-full">
          <MapContainer
            center={[3.397284082348134, -76.54329666850921]}
            zoom={18}
            scrollWheelZoom={true}
            className="w-full h-96"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[3.397284082348134, -76.54329666850921]}>
              <Popup>
                VF Motors<br/>
                Concesionario de vehículos usados VHS, Cl. 10 #66a-04, Cali, Valle del Cauca
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </Element>
  );
};
