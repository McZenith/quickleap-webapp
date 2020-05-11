import React from "react";
import App from "next/app";
import { Grommet, grommet as grommetTheme, extendDefaultTheme } from "grommet";

const customTheme = {
  global: {},
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Grommet theme={customTheme} full>
        <Component {...pageProps} />
      </Grommet>
    );
  }
}
