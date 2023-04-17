import { ContentWrapper } from "../shared/ContentWrapper"
import { SectionStyled } from "../shared/SectionStyled"
import { SubTitle } from "../shared/SubTitle"
import { Card } from "./style"
import projectImage from '../../assets/fyg-store.png'

const projects = [
    {
        "link": "https://forlucashenrique.github.io/fyg-store/",
        "pathImage": projectImage
    },
    {
        "link": "https://forlucashenrique.github.io/fyg-store/",
        "pathImage": projectImage
    },
    {
        "link": "https://forlucashenrique.github.io/fyg-store/",
        "pathImage": projectImage
    }
]


export const Projects = () => {
    return (
        <SectionStyled id='projects' display='flex' direction='column' align='center'>
            <ContentWrapper align='center' justify='center' width='100%'>
                <SubTitle>
                    Projects
                </SubTitle>
            </ContentWrapper>
            <ContentWrapper width='100%' gap='30px' justify='center'>
                {
                    projects.map(item => (
                        <a href={item.link} target='_blank'>
                            <Card>
                                <img src={item.pathImage}/>
                            </Card>
                        </a>
                    ))

                }

            </ContentWrapper>

        </SectionStyled>
    )
}