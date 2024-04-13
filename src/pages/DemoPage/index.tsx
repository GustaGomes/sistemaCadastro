import { Link } from "react-router-dom";
import { Container } from "./styles";


export const DemoPage = () => {
  return (
    <Container>
          <h1>Componente demonstração</h1>
          <Link to="/home">Voltar</Link>
    </Container>
  );
};
