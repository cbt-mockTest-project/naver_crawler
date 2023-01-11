import {
  NaverViewTapCrawlerTestQuery,
  NaverViewTapCrawlerTestQueryVariables,
} from "./../queries/naverCrawler.generated";
import { useLazyQuery } from "@apollo/client";
import { NAVER_VIEW_CRAWLER } from "../queries/naverCrawler";

export const useNaverViewCrawler = () =>
  useLazyQuery<
    NaverViewTapCrawlerTestQuery,
    NaverViewTapCrawlerTestQueryVariables
  >(NAVER_VIEW_CRAWLER);
