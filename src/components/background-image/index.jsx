import React from "react";
import GatsbyBackgroundImage from "gatsby-background-image";

import Box from "components/box";

const BackgroundImage = (props) => (
  <Box as={GatsbyBackgroundImage} {...props} />
);

export default BackgroundImage;
