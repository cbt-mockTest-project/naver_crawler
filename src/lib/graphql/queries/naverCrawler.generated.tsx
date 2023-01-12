import * as Types from '../../../types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type NaverViewTapCrawlerTestQueryVariables = Types.Exact<{
  input: Types.NaverViewTapCrawlerInput;
}>;


export type NaverViewTapCrawlerTestQuery = { __typename?: 'Query', naverViewTapCrawlerTest: { __typename?: 'NaverViewTapCrawlerOutput', error?: string | null, message?: string | null, ok: boolean, searchCount?: { __typename?: 'SearchCount', all: number, blog: number } | null, postInfo?: { __typename?: 'PostInfo', title: string, content: string, link: string } | null } };


export const NaverViewTapCrawlerTestDocument = gql`
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
    }
  }
}
    `;

export function useNaverViewTapCrawlerTestQuery(options: Omit<Urql.UseQueryArgs<NaverViewTapCrawlerTestQueryVariables>, 'query'>) {
  return Urql.useQuery<NaverViewTapCrawlerTestQuery, NaverViewTapCrawlerTestQueryVariables>({ query: NaverViewTapCrawlerTestDocument, ...options });
};