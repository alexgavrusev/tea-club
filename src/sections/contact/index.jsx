import React from "react";
import { css } from "styled-components";
import GoogleMap from "google-map-react";

import Box from "components/box";
import Section from "components/section";
import { Heading, UnorderedList, ListItem, Link } from "components/typography";
import SocialMedia from "./social-media";

import fb from "images/fb.svg";
import vk from "images/vk.svg";
import insta from "images/insta.svg";

const List = (props) => (
  <UnorderedList
    css={css`
      list-style: none;
    `}
    {...props}
  />
);

const position = { lat: 55.977462, lng: 37.16119 };

const Contact = () => (
  <Section
    display="grid"
    gridTemplateColumns="repeat(6, 1fr)"
    gridAutoRows="1fr"
    gridGap={32}
    pb={64}
  >
    <Box gridColumn={["span 6", "span 6", "span 3"]}>
      <Heading mb={32} textAlign="left">
        Как с нами связаться
      </Heading>
      <List>
        <ListItem>Адрес: Зеленоград, корпус 1546</ListItem>
        <ListItem>
          Телефон: <Link href="tel:+79631234567">+7 (963) 123 45 67</Link>
        </ListItem>
        <ListItem>
          Email:{" "}
          <Link href="mailto:placeholder@gmail.com">placeholder@gmail.com</Link>
        </ListItem>
      </List>

      <List
        display="flex"
        css={css`
          & > li:not(:first-child) {
            margin-top: 0;
          }
        `}
      >
        <SocialMedia href="https://facebook.com" image={fb} />
        <SocialMedia href="https://vk.com" image={vk} px={16} />
        <SocialMedia href="https://instagram.com" image={insta} />
      </List>
    </Box>

    <Box gridColumn={["span 6", "span 6", "span 3"]}>
      <GoogleMap
        defaultCenter={position}
        defaultZoom={18}
        bootstrapURLKeys={{
          key: process.env.GATSBY_MAPS_API_KEY,
          region: "ru",
          language: "ru",
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          new maps.Marker({
            position,
            map,
            title: "Клуб чайной культуры",
          });
        }}
      />
    </Box>
  </Section>
);

export default Contact;
