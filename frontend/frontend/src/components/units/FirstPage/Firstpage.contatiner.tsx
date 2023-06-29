import { useEffect, useState } from "react";
import FirstPagePresenter from "./Firstpage.presenter";
import { useRouter } from "next/router";

export default function FirstpageContainer() {
  const router = useRouter();
  const OnClickPremium = () => {
    router.push("/PreminumPage");
  };
  const OnClickDomestic = () => {
    router.push("./DomesticPage");
  };
  return (
    <FirstPagePresenter
      OnClickPremium={OnClickPremium}
      OnClickDomestic={OnClickDomestic}
    />
  );
}
