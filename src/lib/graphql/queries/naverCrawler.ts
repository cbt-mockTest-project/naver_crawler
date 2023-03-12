import { gql } from "@apollo/client";

export const NAVER_VIEW_CRAWLER = gql`
  query NaverViewTapCrawlerTest($input: NaverViewTapCrawlerInput!) {
    naverViewTapCrawlerTest(input: $input) {
      error
      message
      ok
      searchCounts {
        naver {
          all
          blog
          url
        }
        daum {
          all
          blog
          url
        }
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
