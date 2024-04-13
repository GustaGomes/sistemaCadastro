import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Background, Container, Content, LabelError } from "./styles";
import { FiLogIn } from "react-icons/fi";
import { InputComponent } from "../../components/Input";
import ButtonComponent  from "../../components/Button";
// import logoImg from "../../assets/logo.svg";
import { toast } from 'react-toastify';

export function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      console.log(error,"Preencha todos os campos")
      toast.error("Preencha todos os campos")
      // setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <Container>
      <Content>
        <img height={150} src="https://seeklogo.com/images/F/Federa____o_Paulista_de_Futebol-logo-6DB36EB981-seeklogo.com.png" />
        <form>
          <h1> Faça seu login </h1>
          <InputComponent
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <InputComponent
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          {/* <LabelError>{error}</LabelError> */}
          <ButtonComponent Text="Entrar" onClick={handleLogin} />
        </form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
}
