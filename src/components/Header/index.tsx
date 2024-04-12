import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BtnSignout, Container, TestUserStyle } from "./styles";
import { SideBar } from "../SideBar";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaTimesCircle} from "react-icons/fa";

export function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { signout } = useAuth();

  return (
    <Container>
      <div></div>
      <FaBars onClick={showSiderbar} />
      {sidebar && <SideBar active={sidebar} setActive={setSidebar} />}
      <TestUserStyle> 
        <img
          src="https://avatars.githubusercontent.com/u/26532535?v=4"
          alt="Gustavo Gomes perfil linkedin"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        />
        {dropdownVisible && (
          <div
            style={{
              position: "absolute",
              right: "50px",
              top: "80px",
              backgroundColor: "#7C7C8A",
              boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
              borderRadius: "5px",
            }}
          >
            <BtnSignout onClick={() => [signout(), navigate("/")]}>
              <FaTimesCircle />
              SAIR
            </BtnSignout>
          </div>
        )}
      </TestUserStyle>
    </Container>
  );
}
