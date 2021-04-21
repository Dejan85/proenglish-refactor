import React from "react";
import "./styles.scss";
import {
  ContentContainer,
  Image,
  Text,
  Input,
  Button,
} from "~/src/components/ui";
import img from "./images/bckg2.jpg";
import { msg } from "./messages";

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="home-newsletter">
      <ContentContainer className="home-newsletter__image">
        <Image src={img} alt="img" />
      </ContentContainer>

      <ContentContainer className="home-newsletter__modal-container">
        <ContentContainer
          justifyContent="center"
          alignItems="center"
          padding="2rem"
          width="100%"
          height="20rem"
          borderRadius="5px"
          className="background-color-main-color"
        >
          <Text className="home-newsletter__text" as="p">
            {msg}
          </Text>
        </ContentContainer>
        <ContentContainer className="home-newsletter__input-container">
          <Input
            className="home-newsletter__input"
            placeholder="Uzmite svoju dozu znanja..."
          />
          <Button className="home-newsletter__button">Prijavi se</Button>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  </>
);

const Newsletter = () => {
  return MemoizedUi;
};

export default Newsletter;
