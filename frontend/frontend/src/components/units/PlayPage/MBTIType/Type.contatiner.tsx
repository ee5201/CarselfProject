import { useQuery } from "@apollo/client";
import { FETCHMBTIS } from "./Type.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MBTItypePresenter from "./Type.presenter";
import { IMbtiTypeContatiner } from "./Type.type";

export default function MBTItypeContainer(props: IMbtiTypeContatiner) {
  const { data } = useQuery(FETCHMBTIS);
  const router = useRouter();
  const IMBTI = data?.fetchMbtis.filter((el: any) => el.name.startsWith("I"));
  const EMBTI = data?.fetchMbtis.filter((el: any) => el.name.startsWith("E"));

  const OnclickID = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/ClickPlayPage/Itype/${event.currentTarget.id}`);
  };
  console.log(data);

  return (
    <>
      <MBTItypePresenter
        IMBTI={IMBTI}
        EMBTI={EMBTI}
        OnclickID={OnclickID}
        TypeChange={props.TypeChange}
      />
    </>
  );
}
