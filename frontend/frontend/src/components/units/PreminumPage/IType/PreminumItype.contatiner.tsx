import { useQuery } from "@apollo/client";
import PreminumItypePresenter from "./PreminumItype.presenter";
import { FETCHMBTIS } from "./preminumItyp.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function PreminumItypeContainer() {
  const { data } = useQuery(FETCHMBTIS);
  const router = useRouter();
  const IMBTI = data?.fetchMbtis.filter((el) => el.name.startsWith("I"));

  const OnclickID = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/PreminumPage/Itype/${event.currentTarget.id}`);
  };
  console.log(data);

  return (
    <>
      <PreminumItypePresenter IMBTI={IMBTI} OnclickID={OnclickID} />
    </>
  );
}
