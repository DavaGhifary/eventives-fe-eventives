"use client";

import React from "react";
import { Provider } from "react-redux";
import { CContainer } from "@coreui/react";
import NextNProgress from "nextjs-progressbar";
import { AppSidebar, AppHeader, AppFooter } from "./../src/components/index";
import store from "../store/index";

import "../styles/globals.css";
import "../src/scss/style.scss";
import { useRouter } from "next/router";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const disableAppHeader = ["/auth-event/login", "/auth-event/register"];
const disableAppSidebar = ["/auth-event/login", "/auth-event/register"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Provider store={store}>
      <NextNProgress color="#3399ff" showOnShallow={true} />
      {!disableAppSidebar.includes(pathname) && <AppSidebar />}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {!disableAppHeader.includes(pathname) && <AppHeader />}
        <div className="body flex-grow-1 px-3">
          <CContainer lg className="mb-4">
            <Component {...pageProps} />
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </Provider>
  );
}

export default MyApp;
