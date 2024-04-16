import { HomeFototeca } from "../Fototeca/Layout/HomeFototeca"
import {  LayoutHeader } from "../Header/LayoutHeader"
import { HomeMision } from "../Mision/Layout/HomeMision"
import { HomeQuienesSomos } from "../QuienesSomos/Layout/HomeQuienesSomos"
import { HomeVision } from "../Vision/Layout/HomeVision"

export const HomeLayout = () => {
  return (
    <>
        {/* header */}
        <LayoutHeader/>
        {/* main */}
        <main className="w-full h-full bg-black">
        {/* Quienes somos */}
          <HomeQuienesSomos/>
          {/* mission */}
          <HomeMision/>
          {/* vision */}
          <HomeVision/>
          {/* Fototeca */}
          <HomeFototeca/>
        </main>
        {/* footer */}
    </>
  )
}
