import styled from 'styled-components';


export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    & div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & img {
        width: 20px;
        height: 20px;
    }

    & span {
        margin-right: 5px;
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
    }

`