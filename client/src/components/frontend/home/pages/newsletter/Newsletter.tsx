import React from "react";
import {
  ContentContainer,
  Image,
  Text,
  Input,
  Button,
} from "~/src/components/ui";
import img from "./images/bckg.jpg";
import { msg } from "./messages";

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer
      marginTop="10rem"
      alignItems="center"
      className="box-shadow "
    >
      <ContentContainer width="50%" height="40rem">
        <Image src={img} alt="img" />
      </ContentContainer>

      <ContentContainer
        flexDirection="column"
        width="53%"
        height="35rem"
        justifyContent="space-between"
        alignItems="center"
        padding="3rem"
        marginLeft="-15rem"
        className="box-shadow background-color-white"
        borderRadius="5px"
      >
        <ContentContainer
          justifyContent="center"
          alignItems="center"
          padding="2rem"
          width="100%"
          height="20rem"
          borderRadius="5px"
          className="background-color-main-color"
        >
          <Text className="newsletter-text" as="p">
            {msg}
          </Text>
        </ContentContainer>
        <ContentContainer
          justifyContent="space-between"
          maxWidth="65rem"
          alignSelf="flex-end"
        >
          <Input
            padding="1.5rem"
            width="80%"
            placeholder="Uzmite svoju dozu znanja..."
          />
          <Button padding="0 3rem">Prijavi se</Button>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  </>
);

const Newsletter = () => {
  return MemoizedUi;
};

export default Newsletter;
