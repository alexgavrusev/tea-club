import React from "react";

import Box from "components/box";

const Section = (props) => (
  <Box
    as="section"
    maxWidth="75rem"
    mx="auto"
    px={[16, 16, 32]}
    mt={96}
    {...props}
  />
);

export default Section;
