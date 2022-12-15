import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: '#0496FF',
    White: '#ffffff',
    Black: '#000814',
    Grey: '#6c757d',
    BgWhite: '#ffffff',
    BgBlack: '#000814',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;