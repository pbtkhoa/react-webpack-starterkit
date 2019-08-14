import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";
import LoadingBar from "react-redux-loading-bar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loading from "@src/components/common/Loading";
import routes from "./routes";
import "./assets/scss/app.scss";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
      <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any.isRequired // eslint-disable-line
};

export default App;
