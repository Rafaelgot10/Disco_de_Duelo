import { useContext, useEffect, useState } from "react";
import { StyledDash } from "./style";
import { useNavigate } from "react-router-dom";
import { SiAddthis } from "react-icons/si";
import { toast } from "react-toastify";
import { Header } from "../../components/header/header";
import { TDuelist } from "../../providers/duelistContext/@Types";
import { DuelistContext } from "../../providers/duelistContext/duelistContext";
import { DuelContext } from "../../providers/duelsContext/duelsContext";
import { EndDuelModal } from "../../components/modal/endDuelModal/endDuelModal";
import { TDuel } from "../../providers/duelsContext/@Types";

export function DashPage() {
  const { duelists, duelistA, duelistB, setDuelistA, setDuelistB } =
    useContext(DuelistContext);

  const {
    endDuelModal,
    setEndDuelModal,
    currentDeckDuelistA,
    setCurrentDeckDuelistB,
    setCurrentDeckDuelistA,
    currentDeckDuelistB,
    isDueling,
    seconds,
    setIsDueling,
    isPaused,
    togglePause,
    duelHistory,
    setSeconds,
    formatTime,
  } = useContext(DuelContext);

  const [duels, setDuels] = useState<TDuel[] | null | undefined>(null);

  function SelectDuelist(duelist: TDuelist) {
    if (duelistA == null) {
      setDuelistA(duelist);
    } else if (duelistB == null && duelist.id !== duelistA.id) {
      setDuelistB(duelist);
      console.log("seou b");
    } else {
      // toast dizendo que o duelista ja vai duelar
    }
  }
  console.log(duelHistory);

  function SelectDeckDuelistA(deck: string) {
    const newDuelistA: TDuelist = {
      ...duelistA!,
      currentDeck: deck,
    };

    setDuelistA(newDuelistA);
    setCurrentDeckDuelistA(deck);
  }

  function SelectDeckDuelistB(deck: string) {
    const newDuelistB: TDuelist = {
      ...duelistB!,
      currentDeck: deck,
    };

    console.log("setou b 2");

    setDuelistB(newDuelistB);
    setCurrentDeckDuelistB(deck);
  }

  function startDuel() {
    if (isDueling == false) {
      setSeconds(0);
      setIsDueling(true);
    }
  }

  function cancelDuel() {
    setSeconds(0);
    setIsDueling(false);
    setDuelistA(null);
    setCurrentDeckDuelistB(null);
    setCurrentDeckDuelistA(null);
    setDuelistB(null);
  }

  function saveDuelResult(duel: TDuel) {
    const existingDuels = JSON.parse(
      localStorage.getItem("duelHistory") || "[]"
    );
    existingDuels.push(duel);
    localStorage.setItem("duelHistory", JSON.stringify(existingDuels));
  }

  function endDuel() {
    if (isDueling == true) {
      setEndDuelModal(true);
      setIsDueling(false);
    }
  }

  return (
    <>
      <Header />
      <StyledDash
        duelistASelected={false}
        duelistBSelected={false}
        deckDuelistASelected={false}
        deckDelistBSelected={false}
      >
        {duelistA && duelistB ? null : (
          <>
            <h1>Selecione o Duelista</h1>

            <ul>
              {duelists.map((duelist) => {
                const isSelected =
                  (duelistA && duelist.id === duelistA.id) ||
                  (duelistB && duelist.id === duelistB.id);

                return (
                  <li
                    key={duelist.id}
                    onClick={() => SelectDuelist(duelist)}
                    className={`duelist ${isSelected ? "selected" : ""}`}
                  >
                    {duelist.name}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {isDueling && (
          <p className="timer">⏱️ Tempo de duelo: {formatTime(seconds)}</p>
        )}

        <div className="Duel">
          {duelistA ? (
            <section className="duelistInformations">
              {duelistA && duelistB && !isDueling ? (
                <>
                  <span>{duelistA.name}</span>
                  <h2>Selecione seu Deck</h2>
                  <ul>
                    {duelistA.decks.map((deck) => (
                      <li
                        key={deck.name}
                        onClick={() => SelectDeckDuelistA(deck.name)}
                        className={
                          currentDeckDuelistA === deck.name ? "selected" : ""
                        }
                      >
                        {deck.name}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          ) : null}

          {duelistA && duelistB ? (
            <>
              {" "}
              <span>VS</span>
            </>
          ) : null}

          {duelistB ? (
            <section className="duelistInformations">
              {duelistA && duelistB && !isDueling ? (
                <>
                  <span className="duelistB">{duelistB.name}</span>
                  <h2>Selecione seu Deck</h2>
                  <ul>
                    {duelistB.decks.map((deck) => (
                      <li
                        key={deck.name}
                        onClick={() => SelectDeckDuelistB(deck.name)}
                        className={
                          currentDeckDuelistB === deck.name ? "selected" : ""
                        }
                      >
                        {deck.name}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          ) : null}
        </div>

        {duelistA &&
        duelistB &&
        currentDeckDuelistB &&
        currentDeckDuelistA &&
        !isDueling ? (
          <>
            {" "}
            <button className="buttonDuel" onClick={() => startDuel()}>
              Iniciar Duelo
            </button>
          </>
        ) : null}

        {duelistA && duelistB && !isDueling ? (
          <button className="buttonDuel" onClick={() => cancelDuel()}>
            Cancelar Duelo
          </button>
        ) : null}

        {isDueling ? (
          <>
            {" "}
            <button className="buttonDuel" onClick={() => endDuel()}>
              Encerrar Duelo
            </button>
            <button className="buttonDuel" onClick={() => togglePause()}>
              {isPaused ? "Continuar Duelo" : "Pausar Duelo"}
            </button>
          </>
        ) : null}
      </StyledDash>

      {endDuelModal ? <EndDuelModal /> : null}
    </>
  );
}
