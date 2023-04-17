import { useState } from "react"

import { ContentWrapper } from "../shared/ContentWrapper"
import { SectionStyled } from "../shared/SectionStyled"
import { SubTitle } from "../shared/SubTitle"
import { Button, FormStyled, InputStyeld, Textarea } from "./Forms/style"


export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');


    const handleOnClick = (e) => {
        e.preventDefault();

        const texto = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${number}\nMensagem: ${message}`;
        const textoCodificado = encodeURIComponent(texto);
        const numeroWhatsApp = '5581992029667'; // Insira o número de telefone do WhatsApp aqui (apenas números)
        const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

        window.open(url, '_blank');
    }

    return (

        <SectionStyled id='contact' display='flex' direction='column' align='center'>
            <ContentWrapper width='100%' justify='center' align='center' >
                <SubTitle>
                    Contact
                </SubTitle>
            </ContentWrapper>

            <FormStyled>
                <InputStyeld

                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu Nome"
                />
                <InputStyeld
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"

                />

                <InputStyeld
                    type='tel'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="(99) 99999-9999"
                    pattern="^\(\d{2}\) \d{5}-\d{4}$"
                    maxLength='15'
                    required={true}
                />

                <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite uma mensagem" />
                <Button
                    type='submit'
                    onClick={handleOnClick}
                >
                    Send
                </Button>
            </FormStyled>
        </SectionStyled>
    )
}