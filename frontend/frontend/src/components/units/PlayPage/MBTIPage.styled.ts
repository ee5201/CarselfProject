import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), #ffd393),
    url("https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU4MiVBQyVFQiVBNyU4OXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const WrapperBox = styled.div`
  height: 60%;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TitleBox = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 72px;
  color: #fff;
`;

export const Subtitle = styled.h1`
  padding: 5px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const BtnBox = styled.div`
  display: flex;
  overflow: hidden;
  margin: 20px;
  min-width: 300px;
  flex-grow: 1;
  height: 300px;
  justify-content: center;
  align-items: center;
  background: #ece5c7;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  :hover {
    margin-bottom: 1px;
    background: linear-gradient(rgba(0, 0, 0, 0), #ece5c7);
  }
  @media (max-width: 768px) {
    min-width: 80px;
    height: 180px;
    border-radius: 10px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const contentItems = styled.div`
  font-size: 50px;
`;
