import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutStyled } from "./style"

export const Layout = ({children}) => {
    return (
        <LayoutStyled>
            <Header/>
            <div
                style={{
                    minHeight: '900px'
                }}
            >
                
                {children}
            </div>
            <Footer />
        </LayoutStyled>

        
    )
}