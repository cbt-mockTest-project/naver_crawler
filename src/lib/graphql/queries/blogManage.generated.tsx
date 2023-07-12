import * as Types from '../../../types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetMyBlogPostRankQueryVariables = Types.Exact<{
  input: Types.GetMyBlogPostRankInput;
}>;


export type GetMyBlogPostRankQuery = { __typename?: 'Query', getMyBlogPostRank: { __typename?: 'GetMyBlogPostRankOutput', error?: string | null, message?: string | null, ok: boolean, searchCounts?: { __typename?: 'SearchCounts', naver: { __typename?: 'SearchCount', all: number, blog: number, url: string }, daum: { __typename?: 'SearchCount', all: number, blog: number, url: string } } | null, postInfo?: { __typename?: 'PostInfo', title: string, content: string, link: string, thumb: string } | null } };


export const GetMyBlogPostRankDocument = gql`
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

export function useGetMyBlogPostRankQuery(options: Omit<Urql.UseQueryArgs<GetMyBlogPostRankQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMyBlogPostRankQuery, GetMyBlogPostRankQueryVariables>({ query: GetMyBlogPostRankDocument, ...options });
};