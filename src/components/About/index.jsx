import { SectionStyled } from "../shared/SectionStyled"
import { Content, ContentWrapper, Image, SubTitle } from "./style"
import AboutImage from './../../assets/about.svg'

export const About = () => {
    return (
        <SectionStyled display='flex'>
            <ContentWrapper align='center'>
                <ContentWrapper direction='column' width='60%' >
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
                <Image src={AboutImage} alt="about image"/>
            </ContentWrapper>
        </SectionStyled>
    )
}