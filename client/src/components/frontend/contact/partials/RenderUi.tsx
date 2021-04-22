import React from "react";
import { ContentContainer, Image, Heading, Text } from "~/src/components/ui";
import image from "../images/adresa2.jpg";
import image2 from "../images/adresa3.jpg";
import Form from "./Form";

const RenderUi = () => {
  return (
    <ContentContainer className="contact">
      <ContentContainer className="contact__map">
        <Image disablelazyLoad src={image} alt="img" />
        <Image disablelazyLoad src={image2} alt="img" />
      </ContentContainer>
      <ContentContainer className="contact__form-content">
        <ContentContainer className="contact__heading-container">
          <Heading className="contact__heading" as="h1">
            Kontakt
          </Heading>
          <Text className="contact__heading-span" as="span">
            Pišite nam o svemu što vas interesuje, tu smo da odgovorimo na svako
            vaše pitanje.
          </Text>
        </ContentContainer>
        <ContentContainer className="contact-form">
          <Form />
        </ContentContainer>
        <ContentContainer className="contact__contact-info-text-container">
          <Text className="contact__contact-info-text" as="p">
            A možete i direktno da nas kontaktirate na:
          </Text>
          <Text className="contact__contact-info-text" as="p">
            066/963-75-88
          </Text>
          <Text
            className="contact__contact-info-text contact__contact-info-text--margin-top  "
            as="p"
          >
            Radno vreme Radnim danima:
          </Text>
          <Text className="contact__contact-info-text" as="p">
            9:00 - 19:00
          </Text>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default RenderUi;
