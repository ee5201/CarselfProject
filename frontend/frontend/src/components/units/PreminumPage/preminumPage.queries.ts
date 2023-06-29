import { gql } from "@apollo/client";

export const FETCHMBTIS = gql`
  query fetchMbtis {
    fetchMbtis {
      id
      name
      contents
    }
  }
`;
