import { useLazyQuery } from "@apollo/client";
import { GET_MY_BLOG_POST } from "../queries/blogManage";
import {
  GetMyBlogPostRankQuery,
  GetMyBlogPostRankQueryVariables,
} from "../queries/blogManage.generated";

export const useGetMyBlogPostRank = () =>
  useLazyQuery<GetMyBlogPostRankQuery, GetMyBlogPostRankQueryVariables>(
    GET_MY_BLOG_POST
  );
