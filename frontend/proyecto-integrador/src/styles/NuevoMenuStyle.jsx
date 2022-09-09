import styled from "styled-components";

export const ContenedorMenu = styled.div`
    height: 100vh;

    @media screen and (min-width: 768px) {
        width: 350px;
        height: auto;
    }
`

export const Titulo = styled.div`
    background-color: ${({ theme }) => theme.primary};
    height: 180px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    padding: 10px;
`

export const BotonesIC = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
}   
`

export const AvatarUser = styled.div`
    display: flex;
    gap: 30px;
`