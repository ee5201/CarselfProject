import * as S from "./preminumITYpeDetail.styles";

export default function PreminumITypeDetailPresenter(props) {
  if (!props.data || !props.data.fetchMbti) {
    // 데이터 로딩 중 또는 데이터가 없는 경우 로딩 UI 또는 에러 처리를 할 수 있다.
    return <div>Loading...</div>;
  }

  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.ContentBox>
          <S.TitleBox>
            <S.Title>Type Of {props.data.fetchMbti.name}</S.Title>
          </S.TitleBox>
          <S.MbtiContentBox>
            <S.MbtiContentName>:{props.data.fetchMbti.name}</S.MbtiContentName>
            <S.MbtiContentContent>
              Personality type: <br />
              {props.data.fetchMbti.contents}
            </S.MbtiContentContent>
          </S.MbtiContentBox>
          <S.MbttImageBox>
            <S.ImageTitle>:Personality type Of Car </S.ImageTitle>
            <S.ImageCarName>carName:쉐보레</S.ImageCarName>
            <S.ImageCarImage>
              carImage:
              <br />
              <img />
              렁나ㅣ럼ㄴ
            </S.ImageCarImage>
          </S.MbttImageBox>
        </S.ContentBox>
      </S.WrapperBox>
    </S.Wrapper>
  );
}
