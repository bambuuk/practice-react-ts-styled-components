import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primaryColor: string;
      primaryColorHover: string;
      headerColor: string;
      textColor: string;
    };
  }
}
