// import { z } from "zod";
// import {
//   contactSchema,
//   requestContactSchema,
//   responseContactsSchema,
//   updateContactSchema,
// } from "../../schemas/contact.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TDuel = {
  duelistA: {
    id: number;
    name: string;
    deck: string | null;
    principalCard: string;
  };
  duelistB: {
    id: number;
    name: string;
    deck: string | null;
    principalCard: string;
  };
  winner: string;
  losser: string;
  duration: string;
  date: string;
};

export type IDuelContext = {
  setEndDuelModal: React.Dispatch<React.SetStateAction<boolean>>;
  endDuelModal: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isPaused: boolean;
  setCurrentDeckDuelistA: React.Dispatch<React.SetStateAction<string | null>>;
  currentDeckDuelistA: string | null;
  setCurrentDeckDuelistB: React.Dispatch<React.SetStateAction<string | null>>;
  currentDeckDuelistB: string | null;
  setIsDueling: React.Dispatch<React.SetStateAction<boolean>>;
  isDueling: boolean;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setDuelHistory: React.Dispatch<React.SetStateAction<TDuel[] | null>>;
  duelHistory: TDuel[] | null;
  togglePause(): void;
  saveDuelResult(duel: TDuel): void;
  formatTime(totalSeconds: number): string;
};
//   setContact: React.Dispatch<React.SetStateAction<TContact | undefined>>;
//   contact: TContact | undefined;
//   createContactModal: boolean;
//   setCreateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
//   updateContactModal: boolean;
//   setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
//   deleteContactModal: boolean;
//   setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;

//   createContact: (formData: TContactRequest) => Promise<void>;
//   updateContact: (
//     id: number | undefined,
//     formData: TContactUpdateRequest
//   ) => Promise<void>;
//   deleteContact: (id: number | undefined) => Promise<void>;
// };
