import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  pageHeadingTitle: string;
  description?: string;
  image?: string;
  keywords?: string;
}

const WithHead: React.FC<IProps> = ({
  title,
  description = "네이버 블로그 노출 순위 봇",
  image = "/png/logo01.png",
  keywords = "네이버 블로그 노출 순위 봇, 네이버 블로그 노출, 네이버 블로그 키워드, 네이버 블로그 순위",
  pageHeadingTitle,
}) => {
  const { asPath } = useRouter();
  const CURRENT_URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${asPath}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:image" content={image} key="og:image" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="모두CBT" />
        <meta property="og:url" content={CURRENT_URL} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="모두CBT" />
        {keywords && (
          <meta property="keywords" content={keywords} key="keywords" />
        )}
      </Head>
      <h1 className="hidden-title">네이버 블로그 노출 순위 봇</h1>
      <h2 className="hidden-title">{pageHeadingTitle}</h2>
    </>
  );
};

export default React.memo(WithHead);
