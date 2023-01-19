import { event } from "@lib/ga/gtag";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import {
  Control,
  FormState,
  useForm,
  UseFormHandleSubmit,
} from "react-hook-form";
import { useNaverViewCrawler } from "../../lib/graphql/hooks/naverCrawlerHooks";
import { NaverViewTapCrawlerTestQuery } from "../../lib/graphql/queries/naverCrawler.generated";
import { convertWithErrorHandlingFunc } from "../../lib/utils";
import { LocalStorage } from "../../lib/utils/localStorage";
import { myBlog, searchHistory } from "./index.constants";
import IndexView from "./IndexView";

export interface NaverViewCrawlerForm {
  keyword: string;
  blogName: string;
}
export interface IndexViewProps {
  control: Control<NaverViewCrawlerForm, any>;
  handleSubmit: UseFormHandleSubmit<NaverViewCrawlerForm>;
  formState: FormState<NaverViewCrawlerForm>;
  trySearch: (
    data: NaverViewCrawlerForm
  ) => () => Promise<Promise<void> | undefined>;
  searchLoading: boolean;
  blogRankText: string;
  allRankText: string;
  afterFirstSearch: boolean;
  searchedPostInfo: NaverViewTapCrawlerTestQuery["naverViewTapCrawlerTest"]["postInfo"];
  searchHistoryValues: string[];
  historyboxState: boolean;
  onHistoryValueClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  openHistoryBox: () => void;
  closeHistoryBox: () => void;
  removeSearchHistory: () => void;
}

const IndexContainer = () => {
  const myStorage = new LocalStorage();
  const [searchHistoryValues, setSearchHistoryValues] = useState<string[]>([]);
  const [
    requestNaverBlogRankCrawling,
    { loading: searchLoading, data: searchResult },
  ] = useNaverViewCrawler();
  const [historyboxState, setHistoryBoxState] = useState(false);
  const openHistoryBox = () => {
    if (!historyboxState) setHistoryBoxState(true);
  };
  const closeHistoryBox = () => {
    if (historyboxState) setHistoryBoxState(false);
  };
  const { control, handleSubmit, formState, setValue, watch } =
    useForm<NaverViewCrawlerForm>({
      defaultValues: {
        keyword: "",
        blogName: "",
      },
    });
  useEffect(() => {
    const savedMyBlogName = myStorage.get(myBlog);
    const savedHistoryValues = myStorage.get(searchHistory);
    setSearchHistoryValues(savedHistoryValues);
    if (savedMyBlogName) {
      setValue("blogName", savedMyBlogName);
    }
  }, []);

  useEffect(() => {
    watch((value, { name, type }) => {
      myStorage.set(myBlog, value.blogName);
    });
  }, [watch]);
  const [afterFirstSearch, setAfterFirstSearch] = useState(false);
  const onHistoryValueClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.textContent) {
      setValue("keyword", e.currentTarget.textContent);
    }
  };
  const removeSearchHistory = () => {
    myStorage.remove(searchHistory);
    setSearchHistoryValues([]);
  };
  const requestSearch = async (data: NaverViewCrawlerForm) => {
    event({
      action: "submit",
      category: "rank_search",
      label: "rank_search",
      value: 1,
    });
    const res = await requestNaverBlogRankCrawling({
      variables: { input: data },
    });
    if (res.data?.naverViewTapCrawlerTest.ok) {
      const prevSearchHistoryValues = myStorage.get(searchHistory) as string[];

      if (!prevSearchHistoryValues.includes(data.keyword)) {
        if (prevSearchHistoryValues.length > 2) prevSearchHistoryValues.pop();
        let newSearchHistoryValues = prevSearchHistoryValues
          ? [data.keyword, ...prevSearchHistoryValues]
          : [data.keyword];
        myStorage.set(searchHistory, newSearchHistoryValues);
        setSearchHistoryValues(newSearchHistoryValues);
      }
      setHistoryBoxState(false);
    }
    if (!res.data?.naverViewTapCrawlerTest.ok) {
      message.error("일시적인 에러");
    }
    if (!afterFirstSearch) {
      setAfterFirstSearch(true);
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
  const searchedPostInfo = searchResult
    ? searchResult.naverViewTapCrawlerTest.postInfo
    : null;
  const trySearch = (data: NaverViewCrawlerForm) =>
    convertWithErrorHandlingFunc({ callback: () => requestSearch(data) });
  const blogRankText = searchLoading
    ? "검색중입니다..."
    : searchedCount.blog
    ? searchedCount.blog + "순위"
    : "존재하지 않습니다.";
  const allRankText = searchLoading
    ? "검색중입니다..."
    : searchedCount.all
    ? searchedCount.all + "순위"
    : "존재하지 않습니다.";
  const indexProps: IndexViewProps = {
    trySearch,
    searchLoading,
    blogRankText,
    allRankText,
    afterFirstSearch,
    searchedPostInfo,
    handleSubmit,
    control,
    formState,
    historyboxState,
    openHistoryBox,
    searchHistoryValues,
    closeHistoryBox,
    onHistoryValueClick,
    removeSearchHistory,
  };
  return <IndexView {...indexProps} />;
};

export default IndexContainer;
