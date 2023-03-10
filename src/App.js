import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Header from "./components/organisms/Header/Header.component";
import "./App.css";
import ROUTES from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const clientQuery = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={clientQuery}>
          <Box className="App" sx={{ bgcolor: "#313250" }}>
            <Header />
            {/* <Alert /> */}
            <Routes>
              {ROUTES.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
              ))}
            </Routes>
          </Box>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
