import { message } from "antd";
import React from "react";
import { useNaverViewCrawler } from "../../lib/graphql/hooks/naverCrawlerHooks";
import { NaverViewTapCrawlerTestQuery } from "../../lib/graphql/queries/naverCrawler.generated";
import useInput from "../../lib/hooks/useInput";
import { convertWithErrorHandlingFunc } from "../../lib/utils";
import IndexView from "./IndexView";

export interface SearchedCountType {
  all: number | undefined;
  blog: number | undefined;
}

export interface IndexViewProps {
  blogName: string;
  keyword: string;
  searchLoading: boolean;
  searchResult: NaverViewTapCrawlerTestQuery | undefined;
  trySearch: () => Promise<Promise<void> | undefined>;
  onChangeBlogName: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeKeyword: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchedCount: SearchedCountType;
}

const IndexContainer = () => {
  const [
    requestNaverBlogRankCrawling,
    { loading: searchLoading, data: searchResult },
  ] = useNaverViewCrawler();
  const { value: blogName, onChange: onChangeBlogName } = useInput("");
  const { value: keyword, onChange: onChangeKeyword } = useInput("");
  const requestSearch = async () => {
    const res = await requestNaverBlogRankCrawling({
      variables: { input: { blogName, keyword } },
    });
    if (!res.data?.naverViewTapCrawlerTest.ok) {
      message.error("알수없는 에러");
    }
  };
  const searchedCount = {
    all: searchResult
      ? searchResult?.naverViewTapCrawlerTest.searchCount?.all
      : 0,
    blog: searchResult
      ? searchResult?.naverViewTapCrawlerTest.searchCount?.blog
      : 0,
  };
  const trySearch = convertWithErrorHandlingFunc({ callback: requestSearch });
  const indexProps: IndexViewProps = {
    trySearch,
    blogName,
    keyword,
    onChangeBlogName,
    onChangeKeyword,
    searchLoading,
    searchResult,
    searchedCount,
  };
  return <IndexView {...indexProps} />;
};

export default IndexContainer;
