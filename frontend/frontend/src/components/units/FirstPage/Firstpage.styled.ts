import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), #ffd393),
    url("https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

export const MainBox = styled.div`
  text-align: center;
`;
export const MaintitleH1 = styled.h1`
  font-size: 130px;
  color: #fff;
`;

export const MaintitleP = styled.p`
  font-size: 20px;
  color: #fff;

  font-style: italic;
`;

export const ButtonBox = styled.div`
  margin: 70px auto 0;
`;

export const Button = styled.button`
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 40px;
  padding: 12px 0;
  color: #fff;
  background-color: transparent;
  border: 0.5px solid #fff;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    font-weight: bold;
    color: black;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
`;
