import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { RoutesApp } from "./routes";
import { AuthProvider } from "./contexts/auth";
import { UsersProvider } from "./contexts/users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <UsersProvider>
          <RoutesApp />
          <GlobalStyle />
          <ToastContainer />
        </UsersProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
