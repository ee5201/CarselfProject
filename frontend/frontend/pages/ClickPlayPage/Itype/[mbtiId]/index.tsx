import { gql, useQuery } from "@apollo/client";
import { FETCHMBTI } from "../../../../src/components/units/PlayPage/MBTIType/TypeDetail/TYpeDetail.queries";

import { useRouter } from "next/router";
import TypeDetailContatiner from "../../../../src/components/units/PlayPage/MBTIType/TypeDetail/TYpeDetail.container";

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
      <TypeDetailContatiner data={data} />
    </>
  );
}
