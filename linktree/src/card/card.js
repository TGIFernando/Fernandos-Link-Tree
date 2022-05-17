import React from "react";
import { MainCard, A } from "./cardStyles";

function Card(props) {
  return (
    <MainCard>
      <A target="_blank" href={props.href}>
        {props.media}
      </A>
    </MainCard>
  );
}

export default Card;
