import { create } from "@storybook/theming/create";
import logo from '/Users/lukem/Documents/Luke/FRONTEND MASTERS/DesignSystemswithReact-Storybook/src/assets/images/soh-logo.svg';

export default create({
  base: "light",

  colorPrimary: "black",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "silver",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "black",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Sydney Opera House",
  brandUrl: "https://www.sydneyoperahouse.com/",
  brandImage: logo
});


