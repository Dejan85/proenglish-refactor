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

const Newsletter = () => {
  return (
    <ContentContainer marginTop="10rem" className="box-shadow">
      <ContentContainer width="50%" height="40rem">
        <Image src={img} alt="img" />
      </ContentContainer>

      <ContentContainer
        width="50%"
        justifyContent="center"
        alignItems="center"
        padding="2rem"
      >
        <ContentContainer
          flexDirection="column"
          width="100%"
          height="100%"
          className="background-color-main-color"
        >
          <Text as="p">{msg}</Text>
          <ContentContainer className="flex-direction-column">
            <Input />
            <Button>Click</Button>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default Newsletter;
