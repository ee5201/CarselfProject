import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import MBTIPagePresenter from "./MBTIPage.presenter";
import { FETCHMBTIS } from "./MBTIPage.queries";

export default function MBTIPageContainer() {
  const { data } = useQuery(FETCHMBTIS);
  const router = useRouter();

  const OnclickIType = (event: MouseEvent<HTMLDivElement>) => {
    router.push("/ClickPlayPage/Itype");
  };

  const OnclickEType = () => {
    router.push("/ClickPlayPage/Etype");
  };

  return (
    <>
      <MBTIPagePresenter
        OnclickIType={OnclickIType}
        OnclickEType={OnclickEType}
      />
    </>
  );
}
