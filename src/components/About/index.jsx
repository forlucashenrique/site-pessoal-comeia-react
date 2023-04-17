import { SectionStyled } from "../shared/SectionStyled"
import { Content, Image, SubTitle } from "./style"

import AboutImage from './../../assets/about.svg'
import { ContentWrapper } from "../shared/ContentWrapper"

export const About = () => {
    return (
        <SectionStyled display='flex'>
            <ContentWrapper height='100%' align='center'>
                <ContentWrapper direction='column' width='100%'>
                    <SubTitle>
                        What’s Up!
                    </SubTitle>
                    <Content>
                        I’m Lucas Henrique,
                        a Beginner Web Developer.
                    </Content>
                </ContentWrapper>


            </ContentWrapper>
            <ContentWrapper align='center' position='relative'>
                <Image src={AboutImage} alt="about image" />
            </ContentWrapper>
        </SectionStyled>
    )
}