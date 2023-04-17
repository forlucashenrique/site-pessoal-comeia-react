import styled, { keyframes } from 'styled-components';

const loopJump = keyframes`
    
  0% {
    top: 90px; left: 0px;
  }

  100% {
    top: 150px; left: 40px;
  }

`


export const ContentWrapper = styled.div`
    width: ${props => props.width || '50%'};
    position: ${props => props.position || 'static'};
    display: flex;
    justify-content: flex-start;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: ${props => props.align ? props.align : 'flex-start'};    
`

export const SubTitle = styled.h2`
    font-size: 4.8rem;
    color: white;

`

export const Content = styled.p`
    font-size: 3.2rem;
    color: white;
`

export const Image = styled.img`
    position: absolute;
    animation-name: ${loopJump};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
        
`