// import { z } from "zod";
// import {
// duelistSchema
// } from "../../schemas/users.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

// export type TDuelist = z.infer<typeof duelistSchema>;

export type TDeck = {
  name: string;
};

export type TDuelist = {
  id: number;
  name: string;
  age: string;
  image: string;
  decks: TDeck[];
  currentDeck: string | null;
};

export type IDuelistContext = {
  duelists: TDuelist[];

  setDuelistA: React.Dispatch<
    React.SetStateAction<TDuelist | null | undefined>
  >;

  duelistA: TDuelist | null | undefined;

  setDuelistB: React.Dispatch<
    React.SetStateAction<TDuelist | null | undefined>
  >;

  duelistB: TDuelist | null | undefined;

  //   // loading: boolean;
  //   // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  //   // updateUserModal: boolean;
  //   // setUpdateUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  //   // deleteUserModal: boolean;
  //   // setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  //   // password: string | undefined;
  //   // setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  //   // user: TUserResponse | undefined;
  //   // setUser: React.Dispatch<React.SetStateAction<TUserResponse | undefined>>;
  //   // login: (formData: TLoginForm) => Promise<void>;
  //   // logout: () => void;
  //   // registerUser: (formData: TUserRequest) => Promise<void>;
  //   // updateUser: (formData: TUserUpdateRequest) => Promise<void>;
  //   // deleteUser: (id: number | undefined) => Promise<void>;
  //   // getUserLoged: () => Promise<void>;
};
