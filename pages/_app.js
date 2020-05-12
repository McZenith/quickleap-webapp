import React from "react";
import App from "next/app";
import Head from "next/head";
import { Grommet, grommet as grommetTheme, extendDefaultTheme } from "grommet";

const customTheme = {
  global: {},
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Grommet theme={customTheme} full>
        <Head>
          {/* <title>My page</title> */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/style.css" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </Grommet>
    );
  }
}
