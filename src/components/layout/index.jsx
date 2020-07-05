import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./global-style";
import Seo from "./seo";
import Box from "components/box";

import theme from "theme";

const Layout = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Seo title={title} />
    <Box backgroundColor="primary.900">{children}</Box>
  </ThemeProvider>
);

export default Layout;
