import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import Head from "next/head";
import "../styles/globals.css";

const progress = new ProgressBar({
  size: 4,
  color: "orange",
  className: "z-50",
  delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Glacier InfoTech Travel</title>
        <meta
          name="description"
          content="Explore stays and plan memorable journeys with Glacier InfoTech."
        />
        <meta name="theme-color" content="#ea640e" />
        <link rel="icon" href="/glacier-favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
