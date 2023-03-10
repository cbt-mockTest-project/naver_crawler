/* eslint-disable @next/next/no-img-element */
import OuterClick from "@components/common/outerClick/OuterClick";
import { Button, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { IndexViewProps } from "./IndexContainer";

const IndexView: React.FC<IndexViewProps> = (props) => {
  const {
    control,
    handleSubmit,
    trySearch,
    searchLoading,
    rankText,
    afterFirstSearch,
    formState,
    searchedPostInfo,
    historyboxState,
    openHistoryBox,
    searchHistoryValues,
    closeHistoryBox,
    onHistoryValueClick,
    removeSearchHistory,
  } = props;

  return (
    <form
      className="flex flex-col mt-0 items-center h-screen gap-3 p-6 mx-auto w-full max-w-lg  "
      onSubmit={handleSubmit((data) => trySearch(data)())}
    >
      <p className="text-lg text-left w-full font-bold mb-0">
        네이버 블로그 노출순위 봇
      </p>
      <div className="flex flex-col w-full">
        <label htmlFor="blogName">블로그이름</label>
        <Controller
          control={control}
          name="blogName"
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              value={field.value}
              id="blogName"
              autoComplete="off"
            />
          )}
        />
        <p className="text-red-500 text-xs relative">
          {formState.errors["blogName"]?.type === "required" && (
            <span className="absolute">한 글자 이상 입력해주세요</span>
          )}
        </p>
      </div>
      <OuterClick
        className="flex flex-col w-full relative"
        callback={closeHistoryBox}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="keyword">검색어</label>
          <div className="flex">
            <Controller
              control={control}
              name="keyword"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  className="w-9/12"
                  onChange={(e) => {
                    field.onChange(e);
                    openHistoryBox();
                  }}
                  onFocus={openHistoryBox}
                  value={field.value}
                  id="keyword"
                  autoComplete="off"
                />
              )}
            />
            <Button
              className="w-3/12 "
              type="primary"
              htmlType="submit"
              loading={searchLoading}
            >
              검색
            </Button>
          </div>
        </div>
        {historyboxState &&
          formState.errors["keyword"]?.type !== "required" && (
            <ul className="flex flex-col w-full p-2  border border-gray-300 min-h-[50%] absolute top-14 bg-white">
              <li className="flex justify-between mb-2">
                <span className="text-xs text-gray-400">최근 검색기록</span>
                <button
                  type="button"
                  className="text-xs text-gray-400 hover:text-blue-400"
                  onClick={removeSearchHistory}
                >
                  기록삭제
                </button>
              </li>
              {searchHistoryValues.length >= 1 &&
                searchHistoryValues.map((value, index) => (
                  <li
                    key={index}
                    className="px-1 py-1 cursor-pointer hover:bg-slate-100"
                  >
                    <button
                      type="button"
                      className="w-full text-left text-sm flex gap-2 items-center"
                      onClick={onHistoryValueClick}
                    >
                      <AccessTimeIcon className="text-sm" />
                      <span>{value}</span>
                    </button>
                  </li>
                ))}
            </ul>
          )}
      </OuterClick>
      <p className="text-red-500 text-xs text-left w-full relative bottom-3">
        {formState.errors["keyword"]?.type === "required" && (
          <span className="absolute">한 글자 이상 입력해주세요</span>
        )}
      </p>
      {afterFirstSearch && (
        <>
          <div className="flex items-center gap-4 w-full">
            <div>
              <p className="text-sm mb-0 w-full font-bold">네이버</p>
              <p className="mb-0 text-sm text-start w-full">{`전체 : ${rankText.naver.all}`}</p>
              <p className="text-sm text-start w-full">{`블로그 : ${rankText.naver.blog}`}</p>
            </div>
            <div>
              <p className="text-sm mb-0 w-full font-bold">다음(카카오)</p>
              <p className="mb-0 text-sm text-start w-full">{`전체 : ${rankText.daum.all}`}</p>
              <p className="text-sm text-start w-full">{`블로그 : ${rankText.daum.blog}`}</p>
            </div>
          </div>
          {searchedPostInfo?.title && (
            <div className="flex flex-col justify-start w-full gap-2">
              {searchedPostInfo.thumb && (
                <div className="rounded overflow-hidden">
                  <img
                    className="w-full h-full object-fill"
                    src={searchedPostInfo.thumb}
                    alt="thumb-nail"
                  />
                </div>
              )}
              <a
                className="rounded text-base font-semibold text-zinc-900 "
                href={searchedPostInfo?.link}
                target="_blank"
                rel="noreferrer"
              >
                {searchedPostInfo?.title}
              </a>
              <p className="line-clamp-2">{searchedPostInfo?.content}</p>
            </div>
          )}
        </>
      )}
    </form>
  );
};

export default IndexView;
