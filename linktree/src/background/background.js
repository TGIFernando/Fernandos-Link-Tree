import React from "react";
import Banner from "../banner/banner";
import Card from "../card/card";
import Button from "../button/button";
import { BackgroundDiv } from "./backgroundStyles";

function Background() {
  return (
    <>
      <Banner />
      <BackgroundDiv>
        <Card
          media="Snapchat"
          href="https://www.snapchat.com/add/ferdinandopher"
        />
        <Card media="TikTok" href="https://www.tiktok.com/@TGIFernando" />
        <Card media="GitHub" href="https://www.github.com/TGIFernando" />
        <Card media="TGIF" href="https://tgifernando.com/" />
        <Card
          media="Steam"
          href="https://www.steamcommunity.com/id/TGIFernando"
        />
        <Card media="LinkedIn" href="https://www.linkedin.com/in/f-chavez/" />
        <Button media="Discord" value="TGIFernando#9897" />
        <Button
          media="Bitcoin Wallet"
          value="3QqCiEm5JqjgoggvfBDmDDGvVXfh9LEAav"
        />
        <Button
          media="Eth Wallet"
          value="0xD3006142c09494aE651108e33311052a3d491381"
        />
      </BackgroundDiv>
    </>
  );
}

export default Background;
