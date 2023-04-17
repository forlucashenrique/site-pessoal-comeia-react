import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: ${props => props.width || '50%'};
    height: ${props => props.height || ''};
    position: ${props => props.position || ''};
    display: flex;
    gap: ${props => props.gap || ''};
    flex-wrap: wrap;

    
    justify-content: ${props => props.justify || 'flex-start'};
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: ${props => props.align ? props.align : 'flex-start'};    
`