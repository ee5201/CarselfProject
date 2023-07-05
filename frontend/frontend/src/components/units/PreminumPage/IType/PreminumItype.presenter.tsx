import { useState } from "react";
import * as S from "./PreminumItype.styled";
import { Col, Row } from "antd";

export default function PreminumItypePresenter(props): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.TItleBox>
          <S.ItypeTitle>Click and MBTI</S.ItypeTitle>
        </S.TItleBox>
        <S.GridBox>
          <Row>
            {props.IMBTI &&
              props.IMBTI.map((el) => (
                <Col span={6} key={el.name}>
                  <S.GridItem id={el.name} onClick={props.OnclickID}>
                    {el.name}
                  </S.GridItem>
                </Col>
              ))}
          </Row>
        </S.GridBox>
      </S.WrapperBox>
    </S.Wrapper>
  );
}
