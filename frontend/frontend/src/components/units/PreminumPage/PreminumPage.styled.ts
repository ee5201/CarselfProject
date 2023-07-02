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
  font-family: "my-font";
`;

export const WrapperBox = styled.div`
  height: 60vh;
`;

export const TitleBox = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  color: #fff;
`;

export const Subtitle = styled.h1`
  padding: 5px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 1000px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  overflow: hidden;
`;

export const BtnBox = styled.div`
  display: flex;
  overflow: hidden;
  margin: 80px;
  min-width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background: #ece5c7;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  :hover {
    margin-bottom: 1px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
    background: linear-gradient(rgba(0, 0, 0, 0), #ece5c7);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const contentItems = styled.div`
  font-size: 50px;
`;
