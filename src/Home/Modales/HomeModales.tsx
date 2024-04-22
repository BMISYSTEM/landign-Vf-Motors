import { useContext } from 'react'
import Modal from 'react-modal'
import { HomeContext } from '../Context/HomeContext'
import { HomeModalLogin } from '../Login/ModalLayout/HomeModalLogin'

export const HomeModales = () => {
    const {modalLogin} = useContext(HomeContext)
  return (
    <>
        <Modal isOpen={modalLogin} className={'bg-black/80 w-full h-screen backdrop-blur-sm grid place-content-center '}>
            <HomeModalLogin/>
        </Modal>
    
    </>
  )
}
