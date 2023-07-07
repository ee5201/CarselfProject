import { useEffect, useState } from "react";
import FirstPagePresenter from "./Firstpage.presenter";
import { useRouter } from "next/router";

export default function FirstpageContainer() {
  const router = useRouter();
  const OnClickPremium = () => {
    router.push("/ClickPlayPage");
  };
  return <FirstPagePresenter OnClickPremium={OnClickPremium} />;
}
