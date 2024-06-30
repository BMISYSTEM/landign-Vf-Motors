interface props {
  label: string;
  imagen: string;
}
export const TarjetasServicios = ({ label, imagen }: props) => {
  return (
    <a href="https://wa.me/message/IH5SZDTONQ5MK1" className="border-2 mt-0 bg-[#1D2432] shadow-lg hover:shadow-green-500 border-green-500 rounded-sm hover:scale-110 transition-all hover:border-white md:w-36 md:h-48 w-20 h-auto flex flex-col gap-2 justify-center items-center">
      {/* imagen  */}
      <img src={imagen} alt="imagen de servicio" className="w-16 h-auto" />
      {/* titulo */}
      <p className="md:text-lg text-sm font-bold text-white text-center">
        {label}
      </p>
    </a>
  );
};
