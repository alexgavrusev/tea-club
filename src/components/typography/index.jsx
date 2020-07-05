import React, { forwardRef } from "react";
import { css } from "styled-components";

import Box from "components/box";

export const HeroHeading = (props) => (
  <Box
    as="h1"
    fontFamily="Playfair Display"
    fontStyle="italic"
    fontWeight="bold"
    fontSize={[5, 5, 6]}
    mb={32}
    color="#fff"
    {...props}
  />
);

export const Heading = (props) => (
  <HeroHeading fontSize={[4, 4, 5]} mb={64} textAlign="center" {...props} />
);

export const Subheading = (props) => (
  <Heading
    as="h2"
    fontFamily="Open Sans"
    fontSize={[2, 2, 3]}
    fontStyle="normal"
    fontWeight={400}
    textAlign="left"
    mb={32}
    {...props}
  />
);

export const Paragraph = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="p"
    fontFamily="Open Sans"
    fontWeight={300}
    fontSize={[1, 1, 2]}
    lineHeight={1.25}
    color="#fff"
    {...props}
  />
));

export const Link = (props) => (
  <Paragraph
    as="a"
    css={css`
      color: #fff;
    `}
    {...props}
  />
);

export const UnorderedList = (props) => (
  <Box
    css={css`
      list-style: inside;

      & > li:not(:first-child) {
        margin-top: 16px;
      }
    `}
    as="ul"
    mb={32}
    {...props}
  />
);

export const ListItem = (props) => <Paragraph as="li" {...props} />;

export const DescriptionList = (props) => (
  <Box
    as="dl"
    css={css`
      & > ${Box}:not(:first-child) {
        margin-top: 32px;
      }
    `}
    {...props}
  />
);

export const DescriptionTerm = (props) => (
  <Subheading mb={0} as="dt" textAlign="left" {...props} />
);

export const DescriptionDefinition = (props) => (
  <Paragraph as="dd" {...props} />
);
