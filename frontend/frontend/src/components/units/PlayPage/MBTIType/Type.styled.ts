import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), #ffd393),
    url("https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU4MiVBQyVFQiVBNyU4OXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  font-family: "myfont";
`;
export const WrapperBox = styled.div`
  height: 80%;
  padding: 30px;
  @media (max-width: 768px) {
  }
`;

export const GridBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

export const GridItem = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 30px;
  background: #cdc2ae;
  cursor: pointer;

  @media (min-width: 769px) {
    margin: 50px;
    :hover {
      margin-top: 1px;
      background: linear-gradient(rgba(0, 0, 0, 0.1), #cdc2ae);
    }
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
    margin-top: 60px;
    font-size: 30px;
  }
`;

export const TItleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItypeTitle = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 70px;
    display: flex;
    text-align: center;
  }
`;
