import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {
  pageTitle: string;
};

class Document extends NextDocument<Props> {
  render() {
    const { pageTitle } = this.props;

    return (
      <Html lang="ja">
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
