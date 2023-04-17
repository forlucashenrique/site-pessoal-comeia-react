import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutStyled } from "./style"

export const Layout = ({children}) => {
    return (
        <LayoutStyled>
            <Header/>
                {children}
            <Footer/>
        </LayoutStyled>

        
    )
}