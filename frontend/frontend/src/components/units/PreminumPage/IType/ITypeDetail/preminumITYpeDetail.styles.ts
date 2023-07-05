import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), white);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

export const WrapperBox = styled.div`
  display: flex;
`;

export const ContentBox = styled.div`
  background-color: white;
  height: 100vh;
  width: 1000px;
  margin-top: 100px;
  border: none;
  border-radius: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const Title = styled.h1`
  font-size: 60px;
`;

export const MbtiContentBox = styled.div`
  height: 50vh;
  margin: 20px;
`;

export const MbtiContentName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const MbtiContentContent = styled.span`
  display: flex;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
`;

export const MbttImageBox = styled.div`
  height: 50vh;
  margin: 20px;
`;

export const ImageTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ImageCarName = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 50px;
`;
export const ImageCarImage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 50px;
`;
