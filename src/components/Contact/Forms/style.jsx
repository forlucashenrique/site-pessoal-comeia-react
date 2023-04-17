import styled from 'styled-components';


export const FormStyled = styled.form`
    
    width: 500px;
    height: 500px;
    background: #3867A8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
`

export const InputStyeld = styled.input`
     width: 450px;
    height: 40px;
    margin-bottom: 1px;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 15px;
    margin-top: 20px;
`

export const Textarea = styled.textarea`
    width: 450px;
    height: 200px;
    margin-bottom: 15px;
    margin-top: 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 15px;
    resize: none;
`

export const Button = styled.button`
    width: 450px;
    height: 40px;
    border-radius: 10px;

    border: none;
    background: #1D3557;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all .5s;
    
    &:hover {
        background-color: transparent;
        border: 2px solid #1D3557;
        color: #1D3557;
        cursor: pointer;
    }
`