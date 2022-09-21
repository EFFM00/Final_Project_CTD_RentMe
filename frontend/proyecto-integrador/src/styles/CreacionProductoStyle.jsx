import styled from "styled-components";

export const TituloCP = styled.div`
background-color:#F5C6AA;
height:60px;
padding-top:15px;
padding-left:43px;

@media screen and (max-width: 768px) {
      padding-left:17px;
    }
`
export const ArrowHeader = styled.div `
position: absolute;
  top: 87px;
  right: 20px;
  cursor: pointer;
  width: 30px;
`

export const ContenedorFormurarios = styled.div`
width: 90%;
margin-top: 30px;
margin-left: 43px;
margin-bottom: 30px;
background-color:#FFFFFF;
padding:20px;
border: 1px solid #DFE4EA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

@media screen and (max-width: 768px) {
      margin-left:17px;
    }
`

export const BloqueFormurario = styled.form`
width: 90%;
margin-top: 20px;
margin-left: 10px;
margin-bottom: 30px;
/* background-color:#FFFFFF; */
padding:20px;
/* border: 1px solid #DFE4EA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px; */
`
export const FormurariosCP = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
`

export const Formurario = styled.input`
background-color:#DFE4EA;
opacity: 0.4;
border: 1px solid #ffffff;
border-radius: 5px;
outline:none;
width:100%;
height:40px;
margin-top:5px;
padding-left:15px;
`
export const BotonFormurario = styled.div`
margin-top:20px;
text-align:center;
margin-left: 30%;
    margin-right: 30%;
`
