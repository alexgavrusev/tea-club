import React from "react";

import ElevatedBox from "components/elevated-box";
import Box from "components/box";
import Button from "components/button";
import { Subheading, Paragraph } from "components/typography";
import TopImage from "components/top-image";

const Ceremony = ({
  image,
  heading,
  text,
  buttonText,
  imageOnRight = false,
  onButtonClick,
}) => (
  <ElevatedBox
    gridColumn="span 6"
    display="grid"
    gridTemplateColumns="repeat(6, 1fr)"
    gridColumnGap={32}
  >
    <TopImage
      fluid={image}
      gridColumn={["span 6", "span 6", imageOnRight ? "5 / span 2" : "span 2"]}
      gridRow={1}
    />
    <Box gridColumn={["span 6", "span 6", "span 4"]} p={32}>
      <Subheading>{heading}</Subheading>
      <Paragraph mb={32}>{text}</Paragraph>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </Box>
  </ElevatedBox>
);

export default Ceremony;
