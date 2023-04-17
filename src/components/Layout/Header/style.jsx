import styled from 'styled-components';



export const HeaderStyled = styled.header`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: ${({ theme }) => theme.colors.main}
`

export const Title = styled.h1`
    font-size: 4.8rem;
`

export const Navigation = styled.nav`
    & ul {
        
        width: 400px;
        display: flex;
        justify-content: space-between;
    }

    & a {
        font-size: 2.4rem;
        font-weight: 500;
        padding: 10px;
        border-radius: 10px;
        color: white;
        transition: background-color .5s;
    }

    & a:hover {
        background: ${({theme}) => theme.colors.secundary}
    }

`