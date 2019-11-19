import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import theme from "../src/utils/theme";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ProvidersDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(ProvidersDecorator);
configure(loadStories, module);
