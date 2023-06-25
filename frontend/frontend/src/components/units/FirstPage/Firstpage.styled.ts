import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: auto;
  padding: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const Box = styled.div`
  display: flex;
  padding: 30px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
`;

export const Button = styled.button`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 20px;
  :hover {
    box-shadow: 7px 3px 9px 6px rgba(0, 0, 0, 0.89);
  }
`;

export const MainTitle = styled.h1`
  font-size: 60px;
`;

export const WrapperBox = styled.div`
  /* border: 1px solid black; */
  /* border-radius: 20px; */
`;
