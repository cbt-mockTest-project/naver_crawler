import { Button, Input } from "antd";
import React from "react";
import { convertWithErrorHandlingFunc } from "../../lib/utils";
import { IndexViewProps } from "./IndexContainer";

const IndexView: React.FC<IndexViewProps> = (props) => {
  const {
    blogName,
    keyword,
    onChangeBlogName,
    onChangeKeyword,
    trySearch,
    searchLoading,
    searchResult,
    searchedCount,
  } = props;

  return (
    <div className="flex flex-col mt-11 items-center h-screen gap-3 p-6">
      <div className="flex flex-col w-full">
        <label htmlFor="blogName">블로그이름</label>
        <Input id="blogName" value={blogName} onChange={onChangeBlogName} />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="keyword">검색어</label>
        <Input id="keyword" value={keyword} onChange={onChangeKeyword} />
      </div>
      <Button
        className="w-full"
        type="primary"
        htmlType="button"
        loading={searchLoading}
        onClick={trySearch}
      >
        검색하기
      </Button>
      {/* </div> */}
      <p className="mt-4 text-lg text-start w-full">{`전체탭 검색결과 : ${
        searchedCount.all ? searchedCount.all + "순위" : "존재하지 않습니다."
      }`}</p>
      <p className="text-lg text-start w-full">{`블로그탭 검색결과 : ${
        searchedCount.blog ? searchedCount.blog + "순위" : "존재하지 않습니다."
      }`}</p>
    </div>
  );
};

export default IndexView;
