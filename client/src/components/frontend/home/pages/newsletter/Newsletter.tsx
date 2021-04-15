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
    <ContentContainer className="box-shadow">
      <ContentContainer.ImageSide className="height-40rem">
        <Image src={img} alt="img" />
      </ContentContainer.ImageSide>

      <ContentContainer.TextSide className="justify-content-center align-items-center text-side-width-51-percent">
        <ContentContainer className="newsletter-content-container reset-margin-top">
          <Text className="newsletter-format" as="p">
            {msg}
          </Text>
          <ContentContainer className="flex-direction-column">
            <Input />
            <Button>Click</Button>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer.TextSide>
    </ContentContainer>
  );
};

export default Newsletter;
