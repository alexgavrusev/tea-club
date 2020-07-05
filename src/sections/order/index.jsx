import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Box from "components/box";
import Section from "components/section";
import ElevatedBox from "components/elevated-box";
import {
  Heading,
  Subheading,
  UnorderedList,
  ListItem,
} from "components/typography";
import TopImage from "components/top-image";
import Button from "components/button";

import useDialog from "hooks/useDialog";

const OrderButton = (props) => (
  <Button mt="auto" width={1} {...props}>
    Заказать
  </Button>
);

const ContentContainer = (props) => (
  <Box p={32} display="flex" flexDirection="column" height="100%" {...props} />
);

const Order = () => {
  const data = useStaticQuery(graphql`
    query Orders {
      gunfuCha: file(relativePath: { eq: "gunfu-cha.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      masala: file(relativePath: { eq: "masala.png" }) {
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
    <Section>
      <Heading>Заказать церемонию</Heading>

      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gridGap={32}>
        <ElevatedBox
          gridColumn="span 6"
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          gridColumnGap="inherit"
        >
          <TopImage
            gridColumn={["span 6", "span 6", "span 3", "span 4"]}
            fluid={data.gunfuCha.childImageSharp.fluid}
          />
          <ContentContainer
            gridColumn={["span 6", "span 6", "span 3", "span 2"]}
          >
            <Subheading>Гунфу Ча</Subheading>
            <UnorderedList>
              <ListItem>от 3000 руб за человека</ListItem>
              <ListItem>1.5 часа</ListItem>
              <ListItem>3 сорта чая</ListItem>
              <ListItem>до 8 человек</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать церемонию Гунфу Ча",
                  ceremony: "Гунфу Ча",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>

        <ElevatedBox gridColumn={["span 6", "span 6", "span 3", "span 2"]}>
          <ContentContainer>
            <Subheading>В темноте</Subheading>
            <UnorderedList>
              <ListItem>от 3500 руб за церемонию</ListItem>
              <ListItem>2 часа</ListItem>
              <ListItem>1 (Гунфу Ча) + 2 (варка)</ListItem>
              <ListItem>до 8 человек</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать церемонию в темноте",
                  ceremony: "В темноте",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>

        <ElevatedBox gridColumn={["span 6", "span 6", "span 3", "span 2"]}>
          <ContentContainer>
            <Subheading>Японская</Subheading>
            <UnorderedList>
              <ListItem>от 3000 руб за церемонию</ListItem>
              <ListItem>1.5 часа</ListItem>
              <ListItem>3 сорта чая</ListItem>
              <ListItem>до 8 человек</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать японскую церемонию",
                  ceremony: "Японская",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>

        <ElevatedBox gridColumn={["span 6", "span 6", "span 3", "span 2"]}>
          <ContentContainer>
            <Subheading>Варка чая</Subheading>
            <UnorderedList>
              <ListItem>от 3000 руб за церемонию</ListItem>
              <ListItem>1 час</ListItem>
              <ListItem>2 сорта чая</ListItem>
              <ListItem>до 8 человек</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать варку чая",
                  ceremony: "Варка чая",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>

        <ElevatedBox gridColumn={["span 6", "span 6", "span 3", "span 2"]}>
          <ContentContainer>
            <Subheading>Дегустация</Subheading>
            <UnorderedList>
              <ListItem>от 1000 руб за церемонию</ListItem>
              <ListItem>2 часа</ListItem>
              <ListItem>4 сорта чая</ListItem>
              <ListItem>от 1 человека</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать дегустацию",
                  ceremony: "Дегустация",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>

        <ElevatedBox
          gridColumn={["span 6", "span 6", "span 6", "span 4"]}
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridColumnGap="inherit"
        >
          <TopImage
            gridColumn={["span 2", "span 2", "span 1"]}
            fluid={data.masala.childImageSharp.fluid}
          />
          <ContentContainer gridColumn={["span 2", "span 2", "span 1"]}>
            <Subheading>Приготовление Масалы</Subheading>
            <UnorderedList>
              <ListItem>от 3000 руб за церемонию</ListItem>
              <ListItem>1.5 часа</ListItem>
              <ListItem>1 сорт чая</ListItem>
              <ListItem>до 8 человек</ListItem>
            </UnorderedList>
            <OrderButton
              onClick={() =>
                setDialogState({
                  open: true,
                  formHeading: "Заказать приготовление Масалы",
                  ceremony: "Приготовление Масалы",
                })
              }
            />
          </ContentContainer>
        </ElevatedBox>
      </Box>
    </Section>
  );
};

export default Order;
