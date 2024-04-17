interface props {
  label: string;
  imagen: string;
}
export const TarjetasServicios = ({ label, imagen }: props) => {
  return (
    <div className="border-2 mt-0 bg-[#1D2432]/80 shadow-lg shadow-green-500 border-green-500 rounded-xl w-52 h-60 flex flex-col gap-2 justify-center items-center">
      {/* imagen  */}
      <img src={imagen} alt="imagen de servicio" />
      {/* titulo */}
      <p className="text-lg font-bold text-white text-justify">
        {label}
      </p>
    </div>
  );
};