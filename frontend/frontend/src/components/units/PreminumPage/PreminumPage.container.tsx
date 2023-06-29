import { useQuery } from "@apollo/client";
import PreminumPagePresenter from "./PreminumPage.presenter";
import { FETCHMBTIS } from "./preminumPage.queries";
import { MouseEvent } from "react";

export default function PreminumPageContainer() {
  const { data } = useQuery(FETCHMBTIS);
  const OnClickmbtiButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id);
  };
  return (
    <>
      <PreminumPagePresenter
        OnClickmbtiButton={OnClickmbtiButton}
        data={data}
      />
    </>
  );
}
