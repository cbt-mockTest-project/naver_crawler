import { GetMyBlogPostRankQuery } from "@lib/graphql/queries/blogManage.generated";
import { Card } from "antd";
import React from "react";
import styled from "styled-components";

const SearchPostPreviewBlock = styled.div``;

interface SearchPostPreviewProps {
  blogPostRankData: GetMyBlogPostRankQuery | undefined;
}

const SearchPostPreview: React.FC<SearchPostPreviewProps> = ({
  blogPostRankData,
}) => {
  if (!blogPostRankData?.getMyBlogPostRank.postInfo?.title) return null;
  const { getMyBlogPostRank } = blogPostRankData;
  return (
    <SearchPostPreviewBlock>
      <a
        href={getMyBlogPostRank.postInfo?.link}
        target="_blank"
        rel="noreferrer"
      >
        <Card title={getMyBlogPostRank.postInfo?.title}>
          <p>{getMyBlogPostRank.postInfo?.content}</p>
        </Card>
      </a>
    </SearchPostPreviewBlock>
  );
};

export default SearchPostPreview;
