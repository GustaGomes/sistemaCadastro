import { useState } from "react";
import { Background, Container, Content } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { InputComponent } from "../../components/Input";
import ButtonComponent from "../../components/Button";
import { toast } from "react-toastify";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      console.log(error, "Preencha todos os campos");
      toast.warning("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      console.log(error, 'Os e-mails não são iguais');
      toast.warning("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    toast.success("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <Container>
      <Background />
      <Content>
        <h1> Criar uma Conta </h1>
        <form>
          <InputComponent
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <InputComponent
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <InputComponent
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          {/* <LabelError>{error}</LabelError> */}
          <ButtonComponent Text="Inscrever-se" onClick={handleSignup} />
          <Link to="/">Já tem uma conta?</Link>
        </form>
      </Content>
    </Container>
  );
};
