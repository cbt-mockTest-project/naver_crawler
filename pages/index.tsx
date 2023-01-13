import Head from "next/head";
import LayoutContainer from "../src/components/common/layout/LayoutContainer";
import IndexContainer from "../src/components/index/IndexContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>네이버 블로그 노출순위 봇</title>
      </Head>
      <LayoutContainer>
        <IndexContainer />
      </LayoutContainer>
    </>
  );
}
