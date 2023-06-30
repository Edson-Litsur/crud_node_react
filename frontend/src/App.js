import GlobalStyle from "./style/global.js";
import styled from "styled-components";
import Form from "./components/Forms.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/React-Toastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>USUARIOS</Title>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
