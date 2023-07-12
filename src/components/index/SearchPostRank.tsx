import React from "react";
import styled from "styled-components";
import SearchPostRankForm from "./SearchPostRankForm";
import SearchPostResult from "./SearchPostResult";
import { useGetMyBlogPostRank } from "@lib/graphql/hooks/useBlogManage";
import SearchPostPreview from "./SearchPostPreview";

const SearchPostRankBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface SearchPostRankProps {}

const SearchPostRank: React.FC<SearchPostRankProps> = () => {
  const [
    searchBlogPostRank,
    { loading: searchBlogPostRankLoading, data: blogPostRankData },
  ] = useGetMyBlogPostRank();
  return (
    <SearchPostRankBlock>
      <SearchPostRankForm
        handleSubmitForm={searchBlogPostRank}
        submitLoading={searchBlogPostRankLoading}
      />
      <SearchPostResult
        blogPostRankData={blogPostRankData}
        searchBlogPostRankLoading={searchBlogPostRankLoading}
      />
      <SearchPostPreview blogPostRankData={blogPostRankData} />
    </SearchPostRankBlock>
  );
};

export default SearchPostRank;
