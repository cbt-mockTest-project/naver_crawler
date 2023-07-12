import WithHead from "@components/common/head/WithHead";
import SearchPostRank from "@components/index/SearchPostRank";
import Layout from "@components/common/layout/Layout";

export default function Home() {
  return (
    <>
      <WithHead
        title="네이버 블로그 노출 순위 봇"
        pageHeadingTitle="네이버 블로그 노출 순위 봇 검색페이지"
      />
      <Layout>
        <SearchPostRank />
      </Layout>
    </>
  );
}
