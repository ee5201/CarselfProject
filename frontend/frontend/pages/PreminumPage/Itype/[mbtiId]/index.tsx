import { gql, useQuery } from "@apollo/client";
import PreminumITypeDetailContatiner from "../../../../src/components/units/PreminumPage/IType/ITypeDetail/preminumITYpeDetail.container";
import { FETCHMBTI } from "../../../../src/components/units/PreminumPage/IType/ITypeDetail/preminumITYpeDetail.queries";
import {
  IQuery,
  IQueryFetchMbtiArgs,
} from "../../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

export default function MbetiDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCHMBTI, {
    variables: {
      MbtiName: String(router.query.mbtiId),
    },
  });
  console.log("아이디는?", router.query.mbtiId);
  console.log(data?.fetchMbti.carMain[0].fileimage.url);
  return (
    <>
      <PreminumITypeDetailContatiner data={data} />
    </>
  );
}
