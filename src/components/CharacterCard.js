import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  console.log("character props", props)

  const Card = styled.div`
    text-align: center;
    width: 30%;
    background: #ed9896;
    border-radius: 20px;
    margin: 10px 0;
  `
  const Image = styled.img`
    width: 95%;
    border-radius: 20px;
  `

  return (
    <Card>
      <h2>{props.character.name}</h2>
      <Image src={props.character.image} />
      <p>{props.character.status}</p>
    </Card>
  );
}
