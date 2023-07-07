import { Spin } from "antd";
import * as S from "./TYpeDetail.styles";

export default function TypeDetailPresenter(props) {
  if (!props.data || !props.data.fetchMbti) {
    // 데이터 로딩 중 또는 데이터가 없는 경우 로딩 UI 또는 에러 처리를 할 수 있다.
    return (
      <div>
        <Spin />
      </div>
    );
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
              {props.ContentsSplit.map((el) => (
                <>
                  <br />
                  {el}
                  <br />
                </>
              ))}
            </S.MbtiContentContent>
          </S.MbtiContentBox>
          <S.MbttImageBox>
            <S.ImageTitle>:Personality type Of Car </S.ImageTitle>
            <S.ImageCarName>
              carName:
              {props.data?.fetchMbti.carMain.map((el) => (
                <div key={el.id}>{el.name}</div>
              ))}
            </S.ImageCarName>
            <S.ImageCarImage>
              <br />
              <S.Img src={`https://storage.googleapis.com/${props.carImage}`} />
            </S.ImageCarImage>
          </S.MbttImageBox>
        </S.ContentBox>
      </S.WrapperBox>
    </S.Wrapper>
  );
}
