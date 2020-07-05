import React from "react";
import { css } from "styled-components";

import { Paragraph } from "components/typography";

const Button = (props) => (
  <Paragraph
    css={css`
      background: linear-gradient(
        to right bottom,
        ${(props) =>
          `${props.theme.colors.secondary[900]}, ${props.theme.colors.secondary[800]} `}
      );
      cursor: pointer;
    `}
    forwardedAs="button"
    fontSize={1}
    px={24}
    py={16}
    display="block"
    border={0}
    borderRadius={8}
    width={[1, 1, "auto"]}
    {...props}
  />
);

export default Button;
