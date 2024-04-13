import { Container } from "./styles";
import { Link } from 'react-router-dom';

interface SideBarItemProps {
  Icon: React.ElementType;
  Text: string;
  to: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ Icon, Text, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color:'#fff' }}>
      <Container>
        <Icon />
        <span>{Text}</span>
      </Container>
    </Link>
  );
};
