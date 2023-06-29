import * as S from "./PreminumPage.styled";

export default function PreminumPagePresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.GridContainer>
          {props.data?.fetchMbtis.map((el) => (
            <S.GridItem>
              <S.Button id={el.name} onClick={props.OnClickmbtiButton}>
                {el.name}
              </S.Button>
            </S.GridItem>
          ))}
        </S.GridContainer>
      </S.Wrapper>
    </>
  );
}
