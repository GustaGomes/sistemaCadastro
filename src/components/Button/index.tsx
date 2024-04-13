import { ButtonComponent as Button } from "./styles";

interface ButtonProps {
    Text: string;
    onClick: () => void;
    Type?: "button" | "submit" | "reset";
}

const ButtonComponent = ({ Text, onClick, Type = "button" } : ButtonProps) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  );
};

export default ButtonComponent;