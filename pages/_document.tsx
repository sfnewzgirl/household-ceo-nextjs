import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Calistoga:300,400,500,700&display=swap"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  