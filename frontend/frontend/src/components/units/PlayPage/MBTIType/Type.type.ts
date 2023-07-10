import { MouseEvent } from "react";

export interface IMbtiTypePresenter {
  OnclickID: (event: MouseEvent<HTMLSpanElement>) => void;
  IMBTI: any;
  EMBTI: any;
  TypeChange: Boolean;
}

export interface IMbtiTypeContatiner {
  TypeChange: Boolean;
}
