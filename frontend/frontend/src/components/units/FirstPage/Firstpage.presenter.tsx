import { IPropsFirstPagePresenter } from "./FirstPage.types";
import * as S from "./Firstpage.styled";
import styled, { keyframes } from "styled-components";

export default function FirstPagePresenter(
  props: IPropsFirstPagePresenter
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.MainBox>
          <div>
            <S.MaintitleH1>Seize The Day</S.MaintitleH1>
            <S.MaintitleP>
              Try to Check out your personal MBTI for fun, then you'll find the
              car that fits you
            </S.MaintitleP>
          </div>
          <S.ButtonBox>
            <S.Button onClick={props.OnClickPremium}>Click Play</S.Button>
          </S.ButtonBox>
        </S.MainBox>
      </S.Wrapper>
    </>
  );
}
