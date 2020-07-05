import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Section from "components/section";
import { HeroHeading, Paragraph } from "components/typography";
import Button from "components/button";

import useDialog from "hooks/useDialog";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImage {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { fluid } = data.file.childImageSharp;

  const [, setDialogState] = useDialog();

  return (
    <BackgroundImage fluid={fluid}>
      <Section
        as="main"
        mt={0}
        maxWidth="62rem"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <HeroHeading>
          Чайные церемонии
          <br />в Зеленограде и Москве
        </HeroHeading>
        <Paragraph>
          Вы можете придти к нам или заказать выездную церемонию
        </Paragraph>
        <Button
          mt={48}
          onClick={() =>
            setDialogState({
              open: true,
              formHeading: "Заказать церемонию",
              ceremony: "? (заявка с первого экрана)",
            })
          }
        >
          Заказать церемонию
        </Button>
      </Section>
    </BackgroundImage>
  );
};

export default Hero;
