import styled from 'styled-components';


export const SectionStyled = styled.section`
    display: ${props => props.display ? props.display : 'block'};
    flex-direction: ${props => props.direction || 'row' };
    align-items: ${props => props.align || 'flex-start'};
    width: 100%;
    height: 65rem;
`