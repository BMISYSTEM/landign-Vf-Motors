import { createContext, ReactNode, useState } from "react"
interface props{
    children:ReactNode
}
interface propsProvider{
    modalLogin:boolean,
    setModalLogin:React.Dispatch<React.SetStateAction<boolean>>
}
export const HomeContext = createContext<propsProvider>({modalLogin:false,setModalLogin:()=>{}})
const {Provider} = HomeContext;
export const HomeProviderContext:React.FC<props> = ({children}) => {
    const [modalLogin,setModalLogin] = useState<boolean>(false)
  return (
    <Provider value={{
        modalLogin,
        setModalLogin
    }}>
        {children}
    </Provider>
  )
}
