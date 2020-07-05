import React from "react";
import Image from "gatsby-image";
import { css } from "styled-components";

import Box from "components/box";

const TopImage = (props) => (
  <Box
    css={css`
      @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        [aria-hidden] {
          padding-bottom: 0 !important;
        }
      }
    `}
    as={Image}
    height="auto"
    {...props}
  />
);

export default TopImage;
