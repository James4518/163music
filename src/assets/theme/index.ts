import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primary: "#C20C0C",
    second: "#fff"
  },
  fontSize: {
    primary: "14px"
  },
  mixin: {
    textNowrap: `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `
  }
};
export default theme;
