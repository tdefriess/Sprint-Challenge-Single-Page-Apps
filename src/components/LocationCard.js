import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {
  console.log(props)
  const Card = styled.div`
    text-align: center;
    width: 30%;
    background: #ed9896;
    border-radius: 20px;
    margin: 10px 0;
  `

  
  return (
    <Card>
      <h2>{props.location.name}</h2>
      <h3>Type: {props.location.type}</h3>
      <h3>Dimension: {props.location.dimension}</h3>      
    </Card>
  );
}
