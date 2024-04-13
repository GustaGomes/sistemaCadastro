/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FaTimes,
  FaBook,
  FaCalendarAlt,
  FaSlideshare,
  FaIdBadge
} from "react-icons/fa";

import { Container, Content } from "./styles";
import { SideBarItem } from "../SideBarItem";

interface SideBarProps {
  active: boolean;
  setActive: (active: boolean) => void; // Assuming this change is made in SideBar component
}

export const SideBar: React.FC<SideBarProps> = ( {active, setActive}) => {

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SideBarItem to="/home" Icon={FaIdBadge} Text="Jogadores" />
        <SideBarItem to="/demo" Icon={FaSlideshare} Text="Times" />
        <SideBarItem to="/demo" Icon={FaCalendarAlt} Text="Campeonatos" />
        <SideBarItem to="/demo" Icon={FaBook} Text="Contatos" />
      </Content>
    </Container>
  );
}
