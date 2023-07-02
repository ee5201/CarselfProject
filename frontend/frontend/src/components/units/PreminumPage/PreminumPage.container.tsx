import { useQuery } from "@apollo/client";
import PreminumPagePresenter from "./PreminumPage.presenter";
import { FETCHMBTIS } from "./preminumPage.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { Spin } from "antd";

export default function PreminumPageContainer() {
  const { data } = useQuery(FETCHMBTIS);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const IMBTI = data?.fetchMbtis.filter((el) => el.name.startsWith("I"));
  const EMBTI = data?.fetchMbtis.filter((el) => el.name.includes("E"));

  const OnclickIType = (event: MouseEvent<HTMLDivElement>) => {
    try {
      setIsLoading(true);

      router.push("/PreminumPage/Itype");
    } finally {
      setIsLoading(false);
    }
  };

  const OnclickEType = () => {};

  return (
    <>
      <PreminumPagePresenter
        IMBTI={IMBTI}
        EMBTI={EMBTI}
        OnclickIType={OnclickIType}
        OnclickEType={OnclickEType}
      />
      {isLoading && (
        <Spin tip="Loading...">
          <div style={{ height: "100px" }}></div>
        </Spin>
      )}
    </>
  );
}
