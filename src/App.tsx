import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import FoodKioskApp from './foodkioskApp';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FoodKioskApp />
    </ThemeProvider>
  );
}
