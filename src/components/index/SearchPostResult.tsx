import { GetMyBlogPostRankQuery } from "@lib/graphql/queries/blogManage.generated";
import { Table } from "antd";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

const SearchPostResultBlock = styled.div``;

interface SearchPostResultProps {
  blogPostRankData: GetMyBlogPostRankQuery | undefined;
  searchBlogPostRankLoading: boolean;
}

const SearchPostResult: React.FC<SearchPostResultProps> = ({
  blogPostRankData,
  searchBlogPostRankLoading,
}) => {
  useEffect(() => {
    console.log(blogPostRankData);
  }, [blogPostRankData]);

  const postDataColumns = [
    {
      title: "플랫폼",
      dataIndex: "platform",
      key: "platform",
    },
    {
      title: "전체 탭",
      dataIndex: "totalRank",
      key: "totalRank",
    },
    {
      title: "블로그 탭",
      dataIndex: "blogRank",
      key: "blogRank",
    },
    {
      title: "검색창",
      dataIndex: "searchLink",
      key: "searchLink",
    },
  ];

  const postData = useMemo(() => {
    if (!blogPostRankData) return [];
    const { getMyBlogPostRank } = blogPostRankData;
    return [
      {
        platform: "네이버",
        totalRank: getMyBlogPostRank.searchCounts?.naver.all,
        blogRank: getMyBlogPostRank.searchCounts?.naver.blog,
        searchLink: (
          <a
            href={getMyBlogPostRank.searchCounts?.naver.url}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        ),
      },
      {
        platform: "다음",
        totalRank: getMyBlogPostRank.searchCounts?.daum.all,
        blogRank: getMyBlogPostRank.searchCounts?.daum.blog,
        searchLink: (
          <a
            href={getMyBlogPostRank.searchCounts?.daum.url}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        ),
      },
    ];
  }, [blogPostRankData]);
  return (
    <SearchPostResultBlock>
      <Table
        dataSource={postData}
        columns={postDataColumns}
        pagination={false}
        loading={searchBlogPostRankLoading}
      />
    </SearchPostResultBlock>
  );
};

export default SearchPostResult;
