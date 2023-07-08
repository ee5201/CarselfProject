import { Carousel } from "antd";
import * as S from "./MBTIPage.styled";

export default function MBTIPagePresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperBox>
          <S.TitleBox>
            <S.Title>Choose Your Type </S.Title>
            <S.Subtitle>
              Which person are you? Introvert or Extrovert?
            </S.Subtitle>
          </S.TitleBox>
          <S.ButtonWrapper>
            <S.BtnBox onClick={props.OnclickIType}>
              <S.ContentWrapper>
                <S.contentItems>I Type</S.contentItems>
              </S.ContentWrapper>
            </S.BtnBox>
            <S.BtnBox onClick={props.OnclickEType}>
              <S.ContentWrapper>
                <S.contentItems>E Type</S.contentItems>
              </S.ContentWrapper>
            </S.BtnBox>
          </S.ButtonWrapper>
        </S.WrapperBox>
      </S.Wrapper>
    </>
  );
}
