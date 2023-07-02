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
  height: 80vh;
`;

export const GridBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridItem = styled.div`
  display: flex;
  margin: 50px;
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
  :hover {
    margin-top: 1px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), #cdc2ae);
  }
`;

export const TItleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItypeTitle = styled.span`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
`;
