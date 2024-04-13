import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  id: number;
  image?: string;
  name: string;
  age?: string;
  document?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthdate?: string;
  status?: string;
  gender?: string;
}

interface CreateUserInput {
  image: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  birthdate: string;
  gender: string; 
  age: string,
  document: string,
  status: string,
}

interface UserContextType {
  users: User[];
  fetchUsers: (query?: string) => Promise<void>;
  createUser: (data: CreateUserInput) => Promise<void>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UsersContext = createContext({} as UserContextType);

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers(query?: string) {
    // const url = new URL("http://localhost:3333/users");
    const response = await api.get("users", {
      params: {
        q: query,
      },
    });

    setUsers(response.data);
  }

  async function createUser(data: CreateUserInput) {
    const { address, birthdate, email, gender, image, name, phone, age, document, status } = data;

    const response = await api.post("/users", {
      image,
      name,
      address,
      email,
      phone,
      birthdate,
      gender,
      age,
      document,
      status,
    });
    setUsers((state) => [response.data, ...state]);
    console.log(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ users: users, fetchUsers, createUser }}>
      {children}
    </UsersContext.Provider>
  );
}
