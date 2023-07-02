import { Carousel } from "antd";
import * as S from "./PreminumPage.styled";

const contentStyle: React.CSSProperties = {
  // marginTop: "100px",
  // marginLeft: "600px",
  // marginRight: "600px",
  height: "260px",
  color: "#3F2305",
  lineHeight: "160px",
  textAlign: "center",
  background: "#F3DEBA",
  borderRadius: "20px",
  fontSize: "50px",
};

export default function PreminumPagePresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperBox>
          <S.TitleBox>
            <S.Title>Chose Your MBTI Type </S.Title>
            <S.Subtitle>
              Find your tendencies, Are you an Introvert or Extrovert?
            </S.Subtitle>
          </S.TitleBox>
          <S.ButtonWrapper>
            <S.BtnBox onClick={props.OnclickIType}>
              <S.ContentWrapper>
                <S.contentItems>I Type</S.contentItems>
              </S.ContentWrapper>
            </S.BtnBox>
            <S.BtnBox>
              <S.ContentWrapper>
                <S.contentItems onClick={props.OnclickEType}>
                  E Type
                </S.contentItems>
              </S.ContentWrapper>
            </S.BtnBox>
          </S.ButtonWrapper>
        </S.WrapperBox>
      </S.Wrapper>
    </>
  );
}
