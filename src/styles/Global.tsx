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

//Headings
.hl-1 {
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.hl-2 {
  font-size: 2.25rem;
  line-height: 2.8rem;
  letter-spacing: -0.075rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.hl-3 {
  font-size: 1.75rem;
  line-height: 2.2rem;
  letter-spacing: -0.05rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.hl-4 {
  font-size: 1.35rem;
  line-height: 1.7rem;
  letter-spacing: 0rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.hl-5 {
  font-size: 1.125rem;
  line-height: 1.45rem;
  letter-spacing: 0.0375rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.hl-6 {
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.075rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

//Paragraphs
.b {
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.075rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

@media ${device.sm} {
  .hl-1 {
    font-size: 2.25rem;
    line-height: 2.8rem;
  }

  .hl-2 {
    font-size: 1.75rem;
    line-height: 2.2rem;
  }

  .hl-3 {
    font-size: 1.35rem;
    line-height: 1.7rem;
  }

  .hl-4 {
    font-size: 1.125rem;
    line-height: 1.45rem;
  }

  .hl-5 {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .hl-6 {
    font-size: 0.875rem;
    line-height: 1rem;
  }

 .b {
    font-size: 0.875rem;
    line-height: 1rem;
  }
}

`;

export default GlobalStyles;
