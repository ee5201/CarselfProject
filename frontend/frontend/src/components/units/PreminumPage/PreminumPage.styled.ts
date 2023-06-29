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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 100px;
`;

export const GridItem = styled.div`
  width: 200px;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 14px;
  width: 120px;
  height: 90px;
  font-size: 14px;
  background: transparent;
  border-radius: 10px;
`;
