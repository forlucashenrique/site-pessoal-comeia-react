import { SectionStyled } from "../shared/SectionStyled"
import { Card, SubTitle } from "./style"

export const Projects = () => {
    return (
        <SectionStyled display='flex'>
            
            <SubTitle>
                Projects
            </SubTitle>
            <Card />
            <Card />
            <Card />
        </SectionStyled>
    )
}