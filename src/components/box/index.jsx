import styled from "styled-components";
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  grid,
} from "styled-system";

import React from "react";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

const parser = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  grid
);

const themeTransform = (theme) => (custom, variants) => {
  let themedVariants = {};
  for (let [variant, variantValues] of Object.entries(variants)) {
    let themedVariant = {};

    if (!custom && typeof variantValues === "function") {
      throw new Error("No `custom` prop supplied");
    }

    if (typeof variantValues === "function") {
      variantValues = variantValues(custom);
    }

    for (const [key, value] of Object.entries(variantValues)) {
      if (key === "themable") {
        themedVariant = { ...themedVariant, ...parser({ ...value, theme }) };
      } else {
        themedVariant[key] = value;
      }
    }

    themedVariants[variant] = themedVariant;
  }

  return themedVariants;
};

export const MotionBox = React.forwardRef(
  ({ variants, custom, as = motion.div, ...props }, ref) => {
    const theme = useTheme();

    return (
      <Box
        as={motion.div}
        ref={ref}
        variants={themeTransform(theme)(custom, variants)}
        {...props}
      />
    );
  }
);

const Box = styled.div`
  ${parser}
`;

export default Box;
