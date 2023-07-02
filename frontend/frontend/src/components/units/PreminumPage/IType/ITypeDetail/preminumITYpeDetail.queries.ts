import { gql } from "@apollo/client";

export const FETCHMBTI = gql`
  query fetchMbti($MbtiName: String!) {
    fetchMbti(MbtiName: $MbtiName) {
      id
      name
      contents
    }
  }
`;
