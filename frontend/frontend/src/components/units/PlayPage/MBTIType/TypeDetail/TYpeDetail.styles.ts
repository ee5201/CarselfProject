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
  padding: 50px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentBox = styled.div`
  background-color: white;
  border: none;
  border-radius: 20px;
  @media (min-width: 769px) {
    height: 100vh;
    width: 1000px;
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    height: 100vh;
    margin: 28%;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  @media (max-width: 768px) {
    margin: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

export const MbtiContentBox = styled.div`
  height: 50vh;
  margin: 20px;
  @media (max-width: 768px) {
    height: 100vh;
    margin: 10px;
  }
`;

export const MbtiContentName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const MbtiContentContent = styled.span`
  display: flex;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
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
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const ImageCarName = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    font-size: 50px;
    display: flex;
    text-align: center;
  }
`;

export const ImageCarsubName = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 50px;
    display: flex;
    text-align: center;
    margin-left: 10px;
  }
`;
export const ImageCarImage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 50px;
`;

export const Img = styled.img`
  width: 900px;
  height: 600px;
  border-radius: 20px;
`;
