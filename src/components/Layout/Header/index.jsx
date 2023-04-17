import { HeaderStyled, Navigation, Title } from "./style"



export const Header = () => {
    return (
        <HeaderStyled>
            <Title>
                LH
            </Title>
            <Navigation>
                <ul> 
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#projects">
                        <li>Projects</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                  
                </ul>
            </Navigation>

        </HeaderStyled>
    )
}