import { createContext, useState } from "react";
import { IDefaultProviderProps, IDuelistContext, TDuelist } from "./@Types";
// import {
//   IDefaultProviderProps,
//   IUserContext,
//   TDuelist,
//   TLoginForm,
//   TResponseLogin,
//   TUserRequest,
//   TUserResponse,
//   TUserUpdateRequest,
// } from "./@Types";
// // import { api } from "../../services/api";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// type responseError = {
//   message: string;
// };

export const DuelistContext = createContext({} as IDuelistContext);

export const DuelistProvider = ({ children }: IDefaultProviderProps) => {
  const duelists: TDuelist[] = [
    {
      id: 1,
      name: "Seto Pairus",
      age: "?",
      image: "Teste1",
      decks: [
        {
          name: "Blue-Eyes",
        },
        {
          name: "Evil Eye",
        },
        {
          name: "D/D/D",
        },
        {
          name: "Lunalight",
        },
      ],
      currentDeck: null,
    },
    {
      id: 2,
      name: "Minine Marcos",
      age: "20",
      image: "Teste2",
      decks: [
        {
          name: "Fire King",
        },
        {
          name: "Vanquish Soul",
        },
        {
          name: "Red Dragon",
        },
        {
          name: "Mimighoul",
        },
        {
          name: "Swordsoul",
        },
      ],
      currentDeck: null,
    },
    {
      id: 3,
      name: "Yami Lukas",
      age: "Sim",
      image: "Teste2",
      decks: [
        {
          name: "Dark Magician",
        },
        {
          name: "Kashtira",
        },
        {
          name: "Involked",
        },
        {
          name: "Dino",
        },
        {
          name: "Magikey",
        },
      ],
      currentDeck: null,
    },
  ];

  const [duelistA, setDuelistA] = useState<TDuelist | null | undefined>(null);

  const [duelistB, setDuelistB] = useState<TDuelist | null | undefined>(null);

  //   // const [loading, setLoading] = useState(true);

  //   // const [updateUserModal, setUpdateUserModal] = useState(false);

  //   // const [deleteUserModal, setDeleteUserModal] = useState(false);

  //   // const [password, setPassword] = useState<string>();

  //   // const [user, setUser] = useState<TUserResponse>();

  //   // const navigate = useNavigate();

  //   // let token = localStorage.getItem("KNZ-Schedule-Token");

  //   // async function login(formData: TLoginForm) {
  //   //   try {
  //   //     setLoading(true);
  //   //     const response = await api.post<TResponseLogin>("login", formData);
  //   //     localStorage.setItem("KNZ-Schedule-Token", response.data.token);

  //   //     navigate("/dash");
  //   //     toast.success(`Bem-vindo de volta !!`);
  //   //     setPassword(formData.password);
  //   //   } catch (error) {
  //   //     if (axios.isAxiosError<string>(error)) {
  //   //       if (error.response?.status == 401) {
  //   //         toast.error("Credenciais incorretas");
  //   //         console.log(error);
  //   //       } else {
  //   //         console.log(error);
  //   //       }
  //   //     }
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // }

  //   // function logout() {
  //   //   localStorage.removeItem("KNZ-Schedule-Token");
  //   //   setPassword("");
  //   //   navigate("/login");
  //   // }

  //   // async function registerUser(formData: TUserRequest) {
  //   //   try {
  //   //     const response = await api.post<TUserResponse>("users", formData);
  //   //     toast.success(`Usuario ${formData.fullName} cadastrado com sucesso `);
  //   //     navigate("/login");
  //   //   } catch (error) {
  //   //     if (axios.isAxiosError<responseError>(error)) {
  //   //       if (error.response?.data.message == "Phone number already exists") {
  //   //         toast.error("Numero de telefone já esta cadastrado em sua conta");
  //   //         console.log(error);
  //   //       } else if (error.response?.data.message == "Email already exists") {
  //   //         toast.error("Email já cadastrado em sua conta");
  //   //         console.log(error);
  //   //       } else {
  //   //         console.log(error);
  //   //       }
  //   //     }
  //   //   }
  //   // }

  //   // async function updateUser(formData: TUserUpdateRequest, id: number) {
  //     // try {
  //     //   setLoading(true);
  //     //   const response = await api.patch<TUserResponse>("profile/", formData, {
  //     //     headers: {
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   });
  //     //   toast.success(
  //     //     `Usuario ${response.data.fullName} atualizado com sucesso `
  //     //   );
  //     //   getUserLoged();
  //     //   setUpdateUserModal(false);
  //     // } catch (error) {
  //     //   if (axios.isAxiosError<responseError>(error)) {
  //     //     if (error.response?.data.message == "Phone number already exists") {
  //     //       toast.error("Numero de telefone já esta cadastrado em sua conta");
  //     //       console.log(error);
  //     //     } else if (error.response?.data.message == "Email already exists") {
  //     //       toast.error("Email já cadastrado em sua conta");
  //     //       console.log(error);
  //     //     } else {
  //     //       console.log(error);
  //     //     }
  //     //   }
  //     // } finally {
  //     //   setLoading(false);
  //     // }
  //   // }

  //   // async function deleteUser(id: number | undefined) {
  //   //   try {
  //   //     setLoading(true);
  //   //     const response = await api.delete(`users/${id}/`, {
  //   //       headers: {
  //   //         Authorization: `Bearer ${token}`,
  //   //       },
  //   //     });
  //   //     toast.success(`Usuario ${user?.fullName} deletado com sucesso`);
  //   //     setDeleteUserModal(false);
  //   //     logout();
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // }

  return (
    <DuelistContext.Provider
      value={{
        duelists,
        duelistA,
        setDuelistA,
        duelistB,
        setDuelistB,
      }}
    >
      {children}
    </DuelistContext.Provider>
  );
};
