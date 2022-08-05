import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

export const Contenedor = styled.div`
    background-color: ${({ theme }) => theme.fondo};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 15px;
    position: fixed;
    width: 100%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    color: ${({ theme }) => theme.titulos};
    font-weight: bold;
`

export const Menu = styled.nav`
    background-color: ${({ theme }) => theme.fondo};
    position: absolute;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 75%;
    height: 100vh;
    transition: 0.5s all ease;

    // @media screen and (min-width: 768px) {
    //     display: block;
    // }
`

export const StyleCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
`

export const Titulo = styled.h1`
    background-color: ${({ theme }) => theme.primary};
    height: 180px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    padding: 10px;
    
`

export const MenuItems = styled.ul`
    list-style: none;
    color: ${({ theme }) => theme.secondary};
`

export const Item = styled.li`
    height: 60px;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 15px;
`
