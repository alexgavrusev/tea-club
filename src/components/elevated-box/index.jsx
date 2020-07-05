import React from "react";

import Box from "components/box";

const ElevatedBox = (props) => (
  <Box
    backgroundColor="primary.800"
    boxShadow="4px 4px 30px 16px rgba(0,0,0,0.3)"
    {...props}
  />
);

export default ElevatedBox;
