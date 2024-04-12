import { useContext } from "react";
import {
  CardContainer,
  CardDetail,
  CardImage,
  CardInfo,
  CardMoreInfo,
  MoreInfoButton,
  SummaryContainer,
  TestTitleStatus,
} from "./styles";
import { UsersContext } from "../../contexts/users";
import { useNavigate } from "react-router-dom";

export function Summary() {
  const { users } = useContext(UsersContext);
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      {users.map((user) => {
        return (
          <CardContainer key={user.id}>
            <CardInfo>
              <CardImage src={user.image} alt="Foto de perfil" />
              <CardDetail>{user.name}</CardDetail>
              <CardDetail>{user.age} Anos</CardDetail>
            </CardInfo>
            <CardMoreInfo>
              <TestTitleStatus>
                <CardDetail>{user.status}</CardDetail>
              </TestTitleStatus>
              <CardDetail>
                Email: <span>{user.email}</span>
              </CardDetail>
              <CardDetail>
                Telefone: <span> {user.phone} </span>
              </CardDetail>
              <CardDetail>
                Endereço: <span>{user.address} </span>
              </CardDetail>
              <CardDetail>
                Data de Nascimento: <span>{user.birthdate} </span>
              </CardDetail>
              <MoreInfoButton onClick={() => navigate("/demo")}>
                Detalhes
              </MoreInfoButton>
            </CardMoreInfo>
          </CardContainer>
        );
      })}
    </SummaryContainer>
  );
}
