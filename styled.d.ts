import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      second: string;
    };
    fontSize: {
      primary: string;
    };
  }
}
