import {
  DashboardContainer,
  NewProfileContainer,
  NewTransactionButton,
} from "./styles";
import { FaUserPlus } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import { NewUserModal } from "../../components/NewUserModal";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <NewProfileContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> <FaUserPlus/> Cadastro</NewTransactionButton>
          </Dialog.Trigger>
          <NewUserModal />
        </Dialog.Root>
      </NewProfileContainer>
      <Summary />
    </DashboardContainer>
  );
}
