import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="네이버블로그 키워드 순위 크롤링 봇" />
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
        <meta
          name="keywords"
          content="산업안전기사,산업안전기사실기,산업안전기사실기CBT,전기기사,전기기사실기,전기기사실기CBT,전기기사실기단답형,전자문제집,모두CBT,정보처리기사,정보처리기사실기,정보처리기사실기CBT"
        />
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
