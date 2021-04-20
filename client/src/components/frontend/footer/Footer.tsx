import React from "react";
import {
  SubContainer,
  ContentContainer,
  FooterContainer,
  Heading,
  Text,
  Link,
} from "~/src/components/ui";

import {
  proenglish,
  kursevi,
  sertificati,
  pratiteNas,
  kontakt,
} from "./messages";

const Footer = () => {
  return (
    <FooterContainer>
      <SubContainer>
        <FooterContainer.Section width="35rem">
          <FooterContainer.Heading>
            <Heading className="footer-heading" as="h1">
              PROENGLISH
            </Heading>
          </FooterContainer.Heading>
          <ContentContainer outline="1px solid red">
            <Text as="p">
              We are Education, your passion for knowledge and inspiration. Step
              inside our school and make English your comfort zone. Follow us to
              get the latest news and your piece of knowledge.
            </Text>

            <Text as="p">
              Predstavljamo novi vid obrazovanja gde budimo strast i inspiraciju
              za učenje jezika. Zakorači u naš svet i nek ti engleski bude tvoja
              zona komfora. Kontaktiraj nas da bi postao deo novog trenda
              učenja.
            </Text>
          </ContentContainer>
        </FooterContainer.Section>
      </SubContainer>
    </FooterContainer>
  );
};

export default Footer;
