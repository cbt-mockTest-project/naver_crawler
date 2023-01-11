import { Button, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { convertWithErrorHandlingFunc } from "../../lib/utils";
import { IndexViewProps } from "./IndexContainer";

const IndexView: React.FC<IndexViewProps> = (props) => {
  const {
    control,
    handleSubmit,
    trySearch,
    searchLoading,
    blogRankText,
    allRankText,
    afterFirstSearch,
    formState,
  } = props;

  return (
    <form
      className="flex flex-col mt-11 items-center h-screen gap-3 p-6"
      onSubmit={handleSubmit((data) => trySearch(data)())}
    >
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
            />
          )}
        />
        {formState.errors["blogName"]?.type === "required" && (
          <p className="text-red-500">한 글자 이상 입력해주세요</p>
        )}
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="keyword">검색어</label>
        <Controller
          control={control}
          name="keyword"
          rules={{ required: true }}
          render={({ field }) => (
            <Input onChange={field.onChange} value={field.value} id="keyword" />
          )}
        />
        {formState.errors["keyword"]?.type === "required" && (
          <p className="text-red-500">한 글자 이상 입력해주세요</p>
        )}
      </div>
      <Button
        className="w-full"
        type="primary"
        htmlType="submit"
        loading={searchLoading}
        // onClick={trySearch}
      >
        검색하기
      </Button>
      {afterFirstSearch && (
        <>
          <p className="mt-4 text-lg text-start w-full">{`전체탭 검색결과 : ${allRankText}`}</p>
          <p className="text-lg text-start w-full">{`블로그탭 검색결과 : ${blogRankText}`}</p>
        </>
      )}
    </form>
  );
};

export default IndexView;
