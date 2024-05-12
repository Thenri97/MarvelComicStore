import { Header } from "../components/header"
import { Main } from "../scripts/styles"


export const DefaultTemplate = ({ children }) => {
    return (
        <>

            <Header />
            {/* <main> */}
            <Main>

                {children}
            </Main>
            {/* </main> */}
            {/* <Footer /> */}
        </>

    )
}