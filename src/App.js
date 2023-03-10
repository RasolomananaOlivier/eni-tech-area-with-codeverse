import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Header from "./components/organisms/Header/Header.component";

import "./App.css";
import ROUTES from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

const clientQuery = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={clientQuery}>
      <Provider store={store}>
        <Box className="App" sx={{ bgcolor: "#313250" }}>
          {/* <Header /> */}
          {/* <Alert /> */}
          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
          </Routes>
        </Box>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
