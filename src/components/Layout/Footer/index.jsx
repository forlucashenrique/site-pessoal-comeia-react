import { FooterStyled } from "./style"
import heartIcon from '../../../assets/heart-icon.svg'
import githubIcon from '../../../assets/github-icon.svg'
import twitterIcon from '../../../assets/twitter-icon.svg'

export const Footer = () => {

    return (
        <FooterStyled>
            <div>
                <span>made by Lucas Henrique with </span>
                <img src={heartIcon} />
            </div>

            <div>
                <img src={githubIcon}/> 
                <img src={twitterIcon} />
            </div>
        </FooterStyled>
    )
}