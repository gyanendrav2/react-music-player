import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

const Home = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
