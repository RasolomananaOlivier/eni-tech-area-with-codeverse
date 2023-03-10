import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Header from "./components/organisms/Header/Header.component";

import "./App.css";
import ROUTES from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clientQuery = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={clientQuery}>
      <Provider store={store}>
        <div className="App">
          <Header />
          {/* <Alert /> */}
          <Routes>
            {ROUTES.map(({ element, path, title }) => (
              <Route key={title} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
