import { useState } from "react";
import * as S from "./Type.styled";
import { Col, Row } from "antd";

export default function MBTItypePresenter(props): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.TItleBox>
          <S.ItypeTitle>Click your MBTI</S.ItypeTitle>
        </S.TItleBox>
        <S.GridBox>
          {props.TypeChange ? (
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
          ) : (
            <Row>
              {props.EMBTI &&
                props.EMBTI.map((el) => (
                  <Col span={6} key={el.name}>
                    <S.GridItem id={el.name} onClick={props.OnclickID}>
                      {el.name}
                    </S.GridItem>
                  </Col>
                ))}
            </Row>
          )}
        </S.GridBox>
      </S.WrapperBox>
    </S.Wrapper>
  );
}
