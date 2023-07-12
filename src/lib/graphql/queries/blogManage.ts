import { gql } from "@apollo/client";

export const GET_MY_BLOG_POST = gql`
  query GetMyBlogPostRank($input: GetMyBlogPostRankInput!) {
    getMyBlogPostRank(input: $input) {
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
