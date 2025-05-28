import { useContext, useEffect, useState } from "react";
import { StyledDash } from "./style";
import { useNavigate } from "react-router-dom";
import { SiAddthis } from "react-icons/si";
import { toast } from "react-toastify";
import { Header } from "../../components/header/header";

export function DashPage() {
  type TDeck = {
    name: string;
  };

  type TDuelist = {
    id: number;
    name: string;
    age: string;
    image: string;
    decks: TDeck[];
  };

  type TDuel = {
    duelistA: {
      name: string;
      deck: string;
      principalCard: string;
    };
    duelistB: {
      name: string;
      deck: string;
      principalCard: string;
    };
    winner: string;
    duration: string;
  };

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
    },
  ];

  const [isDueling, setIsDueling] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [duels, setDuels] = useState<TDuel[] | null | undefined>(null);

  const [duelistA, setDuelistA] = useState<TDuelist | null | undefined>(null);

  const [duelistB, setDuelistB] = useState<TDuelist | null | undefined>(null);

  const [currentMatch, setCurrentMatch] = useState(null);

  function SelectRandomDuelistA() {
    if (duelistA == null) {
      let randomDuelist = Math.floor(Math.random() * 3) + 1;

      if (randomDuelist == duelistB?.id) {
        randomDuelist = randomDuelist + 1;
      }

      const selected = duelists.find((duelist) => duelist.id == randomDuelist);

      setDuelistA(selected);
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isDueling) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isDueling]);

  function SelectDuelist(duelist: TDuelist) {
    if (duelistA == null) {
      setDuelistA(duelist);
    } else if (duelistB == null) {
      setDuelistB(duelist);
    }
  }

  function startDuel() {
    if (isDueling == false) {
      setSeconds(0);
      setIsDueling(true);
    }
  }

  function endDuel() {
    if (isDueling == true) {
      // abrir modal de fim de jogo

      setDuelistA(null);
      setDuelistB(null);
      setCurrentMatch(null);
      setIsDueling(false);
      setSeconds(0);
      setIsDueling(false);
    }
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
  function SelectRandomDuelistB() {
    if (duelistB == null) {
      let randomDuelist = Math.floor(Math.random() * 3) + 1;

      if (randomDuelist == duelistA?.id) {
        randomDuelist = randomDuelist + 1;
      }

      const selected = duelists.find((duelist) => duelist.id == randomDuelist);

      setDuelistB(selected);
    }
  }

  return (
    <>
      <StyledDash>
        <Header />

        {duelistA && duelistB ? null : (
          <>
            <h1>Selecione o Duelista</h1>

            <div className="Buttons">
              <button onClick={() => SelectRandomDuelistA()}>
                {" "}
                Duelista A Aleatorio
              </button>
              <button onClick={() => SelectRandomDuelistB()}>
                {" "}
                Duelista B Aleatorio
              </button>
            </div>

            <ul>
              {duelists.map((duelist) => (
                <li
                  key={duelist.id}
                  onClick={() => SelectDuelist(duelist)}
                  className="duelist"
                >
                  {" "}
                  {duelist.name}
                </li>
              ))}
            </ul>
          </>
        )}
        {isDueling && (
          <p className="timer">⏱️ Tempo de duelo: {formatTime(seconds)}</p>
        )}
        <div className="Duel">
          {duelistA ? (
            <section className="Duel">
              <span>{duelistA.name}</span>
            </section>
          ) : null}

          {duelistA && duelistB ? (
            <>
              {" "}
              <span> VS</span>
            </>
          ) : null}

          {duelistB ? (
            <section className="Duel">
              <span className="duelistB">{duelistB.name}</span>
            </section>
          ) : null}
        </div>
        {duelistA && duelistB ? (
          <>
            {" "}
            <button className="StartDuel" onClick={() => startDuel()}>
              Iniciar Duelo
            </button>
          </>
        ) : null}

        {isDueling ? (
          <>
            {" "}
            <button className="EndDuel" onClick={() => endDuel()}>
              Encerrar Duelo
            </button>
          </>
        ) : null}
      </StyledDash>
    </>
  );
}
