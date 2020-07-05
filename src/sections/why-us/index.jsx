import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "styled-components";

import Box from "components/box";
import Section from "components/section";
import ElevatedBox from "components/elevated-box";
import {
  Heading,
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from "components/typography";
import BackgroundImage from "components/background-image";

import professionals from "images/professionals.png";
import teas from "images/teas.png";
import ceremony from "images/ceremony.png";
import originality from "images/originality.png";

const Icon = (props) => <Box as="img" height={32} mr={16} {...props} />;

const Item = ({ image, heading, description }) => (
  <Box>
    <Box display="flex" alignItems="center" mb={16}>
      <Icon src={image} flex="0 0 auto" />
      <DescriptionTerm flex="1 1 0">{heading}</DescriptionTerm>
    </Box>
    <DescriptionDefinition flex="0 0 100%">{description}</DescriptionDefinition>
  </Box>
);

const WhyUs = () => {
  const data = useStaticQuery(graphql`
    query WhyUs {
      whyUs: file(relativePath: { eq: "why-us.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Heading>Почему выбирают наш клуб</Heading>

      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gridGap={32}>
        <ElevatedBox p={32} gridColumn={["span 6", "span 6", "span 4"]}>
          <DescriptionList>
            <Item
              image={professionals}
              heading="Настоящие профессионалы"
              description="В нашем клубе церемонии проводятся мастерами, познавшими все
                тонкости чая и его правильное заваривания."
            />

            <Item
              image={teas}
              heading="Лучшие сорта чая"
              description="Клуб богат ассортиментом чая, в числе которых имеются
                  редчайшие сорта."
            />

            <Item
              image={ceremony}
              heading="Закрытая церемония"
              description="Пока проводится мероприятие, пространство всецело
                  предоставлено только гостям, никого постороннего не будет."
            />

            <Item
              image={originality}
              heading="Оригинальность мероприятия"
              description="Уютная, расслабляющая обстановка: полное погружение в чайную
                  культуру; путешествие в мир новых вкусов и ароматов"
            />
          </DescriptionList>
        </ElevatedBox>

        <Box display={["none", "none", "block"]} gridColumn="span 2">
          <BackgroundImage
            css={css`
              background-size: contain;
            `}
            height="100%"
            fluid={data.whyUs.childImageSharp.fluid}
          />
        </Box>
      </Box>
    </Section>
  );
};
export default WhyUs;
