import React from "react";
import Text from "./Text";
import styled from "styled-components";

function Avatar({name, initials}) {

    const Contenedor = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
        text-align: right;
        width: 150px;
        
        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            align-items: flex-star;
            text-align: left;
            width: 130px;
        }
    `

  const UserInitials = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
        background-color: ${({ theme }) => theme.secondary};
    }
  `;

  return (
    <>
      <Contenedor>
        <UserInitials>
          {/*TODO: Arreglar para traer las inicailes */}
          <Text type="h2" color="white" text={initials.toUpperCase()} />
        </UserInitials>
        <div>
            <Text type="h3" color="tertiary" text="Hola," />
            <Text type="h3" color="secondary" text={name} />
        </div>
      </Contenedor>
    </>
  );
}

export default Avatar;
