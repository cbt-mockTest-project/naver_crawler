import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="naver-site-verification"
          content="3275290b5098f1e149118277198553886638dd6e"
        />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="msapplication-TileColor" content="#1990ff"></meta>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/png/favicon-32x32.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
