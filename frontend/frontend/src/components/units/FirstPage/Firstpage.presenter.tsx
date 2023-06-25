import * as S from "./Firstpage.styled";

export default function FirstPagePresenter() {
  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.MainTitle>MBTI별 차량 추천</S.MainTitle>
        <S.Box>
          <S.ButtonBox>
            <S.Button>해외차량</S.Button>
          </S.ButtonBox>
          <S.ButtonBox>
            <S.Button>국내차량</S.Button>
          </S.ButtonBox>
        </S.Box>
      </S.WrapperBox>
    </S.Wrapper>
  );
}
