import WithHead from "@components/common/head/WithHead";
import Head from "next/head";
import LayoutContainer from "../src/components/common/layout/LayoutContainer";
import IndexContainer from "../src/components/index/IndexContainer";

export default function Home() {
  return (
    <>
      <WithHead
        title="네이버 블로그 노출 순위 봇"
        pageHeadingTitle="네이버 블로그 노출 순위 봇 검색페이지"
      />
      <LayoutContainer>
        <IndexContainer />
      </LayoutContainer>
    </>
  );
}
