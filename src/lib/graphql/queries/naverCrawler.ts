import { gql } from "@apollo/client";

export const NAVER_VIEW_CRAWLER = gql`
  query NaverViewTapCrawlerTest($input: NaverViewTapCrawlerInput!) {
    naverViewTapCrawlerTest(input: $input) {
      error
      message
      ok
      searchCount {
        all
        blog
      }
      postInfo {
        title
        content
        link
        thumb
      }
    }
  }
`;
