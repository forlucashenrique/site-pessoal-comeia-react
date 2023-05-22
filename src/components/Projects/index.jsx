import { ContentWrapper } from "../shared/ContentWrapper"
import { SectionStyled } from "../shared/SectionStyled"
import { SubTitle } from "../shared/SubTitle"
import { Card } from "./style"
import { useState, useEffect } from "react"
import api from "../../services/api"



export const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const getProjects = async () => {
            try {
                const response = await api.get('projects');
                const data = response.data;
                console.log(data);
                setProjects(data);
            } catch (error) {
                console.log(error);
            }
        }

        getProjects();

    }, [])

    return (
        <SectionStyled id='projects' display='flex' direction='column' align='center'>
            <ContentWrapper align='center' justify='center' width='100%'>
                <SubTitle>
                    Projects
                </SubTitle>
            </ContentWrapper>
            <ContentWrapper width='100%' gap='30px' justify='center'>
                {
                    projects.length > 0 && (
                        projects.map(item => (
                            <a target='_blank'>
                                <Card>
                                    <img src={item.projectImageUrl} />
                                </Card>
                            </a>)
                        )
                    )

                }
            </ContentWrapper>
        </SectionStyled>
    )
}