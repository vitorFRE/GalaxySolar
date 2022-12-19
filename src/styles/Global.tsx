import { createGlobalStyle } from 'styled-components';
import { device } from './BreakPoints';

const GlobalStyles = createGlobalStyle`


.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}
// Reset Css
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  color:#fff;
  background-color: #000814;
  font-family: 'Inter', sans-serif;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #0496FF;
  border-radius: 5px;
}

// Typography

.hl-1 {
  font-family: 'Lora', serif;
  font-weight: 300;
  font-size: 4rem;
  letter-spacing:-0.5px;
  line-height:70.4px;
}

.hl-2 {
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 3.187rem;
  letter-spacing: 0px;
  line-height:56.1px;
}

.hl-3 {
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 2.25rem;
  letter-spacing: 0.25px;
  line-height:39.6px;
}

.hl-4 {
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 1.56rem;
  line-height:27.5px;
}

.hl-5 {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 1.312rem;
  line-height:23.1px;
}

.hl-6 {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height:19.8px;
}


.sb-1 {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 1.062rem;
  letter-spacing: 0.15px;
  line-height:18.7px;
}

.b-1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.93rem;
  letter-spacing: 0.5px;
  line-height:19.5px;
}

@media ${device.md} {
  .hl-2 {
    font-size: 2.25rem;
    letter-spacing: 0.25px;
    line-height:39.6px;
  }
  .b-1 {
    font-size: 0.812rem;
    letter-spacing: 0.25px;
    line-height:16.9px;
  }
}
`;

export default GlobalStyles;
