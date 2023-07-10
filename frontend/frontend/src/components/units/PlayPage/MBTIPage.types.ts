import { MouseEvent } from "react";

export interface IMbtiPagePresenter {
  OnclickIType: (event: MouseEvent<HTMLDivElement>) => void;
  OnclickEType: (event: MouseEvent<HTMLDivElement>) => void;
}
