import { Element } from "react-scroll"

export const HomeQuienesSomos = () => {
  return (
    <Element name="quienes">
        <section className="w-full h-auto flex flex-col gap-2 ">
            {/* texto */}
            <div className="w-[50rem] text-justify p-3 border-2 rounded-xl border-green-500 ml-[15rem] mt-[-2rem] z-10 bg-[#1D2432]">
                <p className=" text-3xl font-bold text-white">Quienes Somos</p>
                <p className="text-slate-200 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit soluta quasi magnam. Sint, vel, sit ratione rem aperiam expedita esse doloribus provident nulla, illo exercitationem assumenda quaerat at. Quaerat, accusamus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur id quibusdam iste cupiditate, doloremque obcaecati eveniet labore repudiandae laborum corporis ipsum. Quo quam voluptatem deleniti quos iure, aspernatur beatae?
                </p>
            </div>
        </section>
    </Element>
  )
}
