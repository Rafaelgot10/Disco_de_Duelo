// import { createContext, useContext, useState } from "react";
// import {
//   IContactContext,
//   IDefaultProviderProps,
//   TContact,
//   TContactRequest,
//   TContactUpdateRequest,
// } from "./@Types";
// import { api } from "../../services/api";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { UserContext } from "../userContext/userContext";

import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IDuelContext, TDuel } from "./@Types";

// type responseError = {
//   message: string;
// };

export const DuelContext = createContext({} as IDuelContext);

export const DuelProvider = ({ children }: IDefaultProviderProps) => {
  const [endDuelModal, setEndDuelModal] = useState(false);
  const [currentDeckDuelistA, setCurrentDeckDuelistA] = useState<string | null>(
    null
  );
  const [currentDeckDuelistB, setCurrentDeckDuelistB] = useState<string | null>(
    null
  );

  const [isDueling, setIsDueling] = useState(false);

  const [duelHistory, setDuelHistory] = useState<TDuel[] | null>(null);

  const [seconds, setSeconds] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const storedDuels = localStorage.getItem("duelHistory");
    if (storedDuels) {
      setDuelHistory(JSON.parse(storedDuels));
    }
  }, []);

  function saveDuelResult(duel: TDuel) {
    const existingDuels = JSON.parse(
      localStorage.getItem("duelHistory") || "[]"
    );
    const updatedDuels = [...existingDuels, duel];

    localStorage.setItem("duelHistory", JSON.stringify(updatedDuels));
    setDuelHistory(updatedDuels);
  }

  function formatTime(totalSeconds: number): string {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isDueling && !isPaused) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isDueling, isPaused]);

  function togglePause() {
    setIsPaused((prev) => !prev);
  }

  return (
    <DuelContext.Provider
      value={{
        endDuelModal,
        setEndDuelModal,
        currentDeckDuelistA,
        setCurrentDeckDuelistA,
        currentDeckDuelistB,
        setCurrentDeckDuelistB,
        isDueling,
        setIsDueling,
        isPaused,
        setIsPaused,
        seconds,
        setSeconds,
        formatTime,
        togglePause,
        duelHistory,
        setDuelHistory,
        saveDuelResult,
      }}
    >
      {children}
    </DuelContext.Provider>
  );
};

//   const [contact, setContact] = useState<TContact>();

//   const [createContactModal, setCreateContactModal] = useState(false);

//   const [updateContactModal, setUpdateContactModal] = useState(false);

//   const [deleteContactModal, setDeleteContactModal] = useState(false);

//   const { getUserLoged } = useContext(UserContext);

//   let token = localStorage.getItem("KNZ-Schedule-Token");

//   async function createContact(formData: TContactRequest) {
//     try {
//       const response = await api.post<TContact>("contact", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       toast.success(`Contato ${formData.fullName} cadastrado com sucesso `);
//       getUserLoged();
//       setCreateContactModal(false);
//     } catch (error) {
//       if (axios.isAxiosError<responseError>(error)) {
//         if (error.response?.data.message == "Phone number already exists") {
//           toast.error("Numero de telefone já esta cadastrado em sua conta");
//           console.log(error);
//         } else if (error.response?.data.message == "Email already exists") {
//           toast.error("Email já cadastrado em sua conta");
//           console.log(error);
//         } else {
//           console.log(error);
//         }
//       }
//     }
//   }

//   async function updateContact(
//     id: number | undefined,
//     formData: TContactUpdateRequest
//   ) {
//     try {
//       const response = await api.patch<TContact>(`contact/${id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       getUserLoged();
//       toast.success(`Contato ${formData.fullName} atualizado com sucesso `);
//       setUpdateContactModal(false);
//     } catch (error) {
//       if (axios.isAxiosError<responseError>(error)) {
//         if (error.response?.data.message == "Phone number already exists") {
//           toast.error("Numero de telefone já esta cadastrado em sua conta");
//           console.log(error);
//         } else if (error.response?.data.message == "Email already exists") {
//           toast.error("Email já cadastrado em sua conta");
//           console.log(error);
//         } else {
//           console.log(error);
//         }
//       }
//     }
//   }

//   async function deleteContact(id: number | undefined) {
//     try {
//       const response = await api.delete(`contact/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       getUserLoged();
//       toast.success(`Contato ${contact?.fullName} deletado com sucesso`);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//
// };
