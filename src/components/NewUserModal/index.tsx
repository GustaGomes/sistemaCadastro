import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { FaX } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useContext } from "react";
import { UsersContext } from "../../contexts/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const newUserFormSchema = z.object({
  image: z.string().default("https://cdn-icons-png.flaticon.com/512/149/149071.png"),
  name: z.string(),
  address: z.string(),
  email: z.string(),
  phone: z.string(),
  birthdate: z.string(),
  gender: z.string(),
  age: z.string().default("25"),
  document: z.string(),
  status: z.string().default("ATIVO"),
});

type NewUserFormInputs = z.infer<typeof newUserFormSchema>;

export function NewUserModal() {
  const navigate = useNavigate();
  const { createUser } = useContext(UsersContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  });

  async function handleCreateNewUser(data: NewUserFormInputs) {
    const {
      address,
      birthdate,
      email,
      gender,
      image,
      name,
      phone,
      age,
      document,
      status,
    } = data;

    await createUser({
      address,
      birthdate,
      email,
      gender,
      image,
      name,
      phone,
      age,
      document,
      status,
    });
    reset();
    toast.success("Usuário cadastrado com sucesso!");
    setTimeout(() => {
      navigate("/home");
      window.location.reload();
    }, 3000);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Novo Cadastro</Dialog.Title>

        <CloseButton>
          <FaX size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewUser)}>
          <input type="text" placeholder="Imagem - Inativo no momento" disabled {...register("image")} />
          <input
            type="text"
            placeholder="Nome"
            required
            {...register("name")}
          />
          <input type="text" placeholder="Endereço" {...register("address")} />
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Telefone" {...register("phone")} />
          <input
            type="text"
            placeholder="Nascimento"
            {...register("birthdate")}
          />
          <input type="text" placeholder="Gênero" {...register("gender")} />
          <input type="text" placeholder="Documento" {...register("document")} />

          {/* <input type="text" placeholder="Idade"   required {...register("age")} />
          <input type="text" placeholder="Status"   required {...register("status")} /> */}

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
