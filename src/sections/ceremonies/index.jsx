import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Box from "components/box";
import Section from "components/section";
import { Heading, Paragraph } from "components/typography";
import Ceremony from "./ceremony";

import useDialog from "hooks/useDialog";

const Ceremonies = () => {
  const data = useStaticQuery(graphql`
    query CeremonyTypes {
      club: file(relativePath: { eq: "club-ceremonies.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      out: file(relativePath: { eq: "out-ceremonies.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const [, setDialogState] = useDialog();

  return (
    <Section
      display="grid"
      gridTemplateColumns="repeat(6, 1fr)"
      gridRowGap={64}
      gridColumnGap={32}
    >
      <Box gridColumn={["span 6", "span 6", "2 / span 4"]}>
        <Heading mb={32}>Наши церемонии</Heading>
        <Paragraph textAlign="center">
          Мы предлагаем вам отвлечься от суеты и отдаться спокойному
          умиротворённому процессу чаепития.
        </Paragraph>
      </Box>

      <Ceremony
        image={data.club.childImageSharp.fluid}
        heading="Церемонии в клубе"
        text="В клубе регулярно проводятся чайные дегустации, церемонии, встречи с
            интересными людьми."
        buttonText="Забронировать место"
        onButtonClick={() =>
          setDialogState({
            open: true,
            formHeading: "Заказать церемонию в клубе",
            ceremony: "В клубе",
          })
        }
      />

      <Ceremony
        image={data.out.childImageSharp.fluid}
        heading="Выездные церемонии"
        text="Также предоставляем чайное сопровождение любого вашего мероприятия:
            свадьбы, выставки, презетации, конференции, корпоративы"
        buttonText="Заказать церемонию"
        imageOnRight
        onButtonClick={() =>
          setDialogState({
            open: true,
            formHeading: "Заказать выездную церемонию",
            ceremony: "Выездная",
          })
        }
      />
    </Section>
  );
};
export default Ceremonies;
