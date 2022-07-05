import styled from "styled-components";

export const Screen = styled.section`
  * {
    box-sizing: border-box;
    font-family: "Raleway";
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #8c11be;
  padding: 34px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
