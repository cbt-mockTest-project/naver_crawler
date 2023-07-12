import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { SearchPostRankFormType } from "./index.type";
import { Button, Input } from "antd";
import { LazyQueryExecFunction } from "@apollo/client";
import { GetMyBlogPostRankQuery } from "@lib/graphql/queries/blogManage.generated";
import { Exact, GetMyBlogPostRankInput } from "types";

const SearchPostRankFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

interface SearchPostRankFormProps {
  handleSubmitForm: LazyQueryExecFunction<
    GetMyBlogPostRankQuery,
    Exact<{
      input: GetMyBlogPostRankInput;
    }>
  >;
  submitLoading: boolean;
}

const SearchPostRankForm: React.FC<SearchPostRankFormProps> = ({
  handleSubmitForm,
  submitLoading,
}) => {
  const { control, handleSubmit, formState, setValue, watch } =
    useForm<SearchPostRankFormType>({
      defaultValues: {
        keyword: "",
        blogName: "",
      },
    });

  const onSubmit = (data: SearchPostRankFormType) => {
    try {
      if (submitLoading) return;
      handleSubmitForm({
        variables: {
          input: {
            blogName: data.blogName,
            keyword: data.keyword,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SearchPostRankFormBlock onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="blogName"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            value={field.value}
            id="blogName"
            size="large"
            autoComplete="off"
            placeholder="블로그 이름을 입력해주세요."
          />
        )}
      />
      <Controller
        control={control}
        name="keyword"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            value={field.value}
            size="large"
            placeholder="검색어를 입력해주세요."
            id="keyword"
            autoComplete="off"
          />
        )}
      />
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={submitLoading}
      >
        검색하기
      </Button>
    </SearchPostRankFormBlock>
  );
};

export default SearchPostRankForm;
