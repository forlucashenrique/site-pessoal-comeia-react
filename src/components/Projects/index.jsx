import { ContentWrapper } from "../shared/ContentWrapper"
import { SectionStyled } from "../shared/SectionStyled"
import { SubTitle } from "../shared/SubTitle"
import { Card} from "./style"

export const Projects = () => {
    return (
        <SectionStyled id='projects' display='flex' direction='column' align='center'>
            <ContentWrapper align='center'justify='center'  width='100%'>
                <SubTitle>
                    Projects
                </SubTitle>
            </ContentWrapper>
            <ContentWrapper width='100%' gap='30px'justify='center'>
                <Card />
                <Card />
                <Card />
            </ContentWrapper>

        </SectionStyled>
    )
}