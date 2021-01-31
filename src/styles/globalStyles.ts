import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
html, body {
   font-family: 'Open Sans', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: ${theme.background};
   color: #fff;
   font-size: 16px;
   overflow-x: hidden;
   }

body{
   min-height: 100vh;
   min-height: -webkit-fill-available;
}

ul,li{
   margin: 0;
   padding: 0;
   list-style: none;
}

input{
   padding: 0;
	border: 0;
}

button{
   cursor: pointer;
   border: none;
   &:focus{
      outline: none;
   }
}

*{
   box-sizing: border-box;
   user-select: none;
}

a{
   text-decoration: none;
   color: #fff
}
`;

export default GlobalStyle;
