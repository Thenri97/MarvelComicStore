import { Header } from "../components/header"
import { Main } from "./styles"


export const DefaultTemplate = ({ children,handleOpenCart,handleCloseCart }) => {
    return (
        <>

            <Header handleOpenCart={handleOpenCart}/>
            {/* <main> */}
            <Main>

                {children}
            </Main>
            {/* </main> */}
            {/* <Footer /> */}
        </>

    )
}