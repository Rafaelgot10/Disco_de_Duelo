import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledEndDuelForm } from "./style";
import { DuelContext } from "../../../providers/duelsContext/duelsContext";
import { DuelistContext } from "../../../providers/duelistContext/duelistContext";
import { TDuel } from "../../../providers/duelsContext/@Types";

export function EndDuelModal() {
  const {
    setEndDuelModal,
    currentDeckDuelistA,
    setCurrentDeckDuelistA,
    currentDeckDuelistB,
    setCurrentDeckDuelistB,
    isDueling,
    seconds,
    setIsDueling,
    setSeconds,
    formatTime,
    saveDuelResult,
  } = useContext(DuelContext);

  const { duelistA, duelistB, setDuelistA, setDuelistB } =
    useContext(DuelistContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDuel>({
    defaultValues: {
      duelistA: {
        id: duelistA?.id,
        name: duelistA?.name,
        deck: duelistA?.currentDeck,
      },

      duelistB: {
        id: duelistB?.id,
        name: duelistB?.name,
        deck: duelistB?.currentDeck,
      },
    },
    mode: "onBlur",
  });

  const onSubmitFunction = (form: TDuel) => {
    const newForm: TDuel = {
      ...form,
      date: new Date().toLocaleDateString("pt-BR"),
      duration: formatTime(seconds),
    };

    saveDuelResult(newForm);

    setDuelistA(null);
    setDuelistB(null);
    setCurrentDeckDuelistA(null);
    setCurrentDeckDuelistB(null);
    setEndDuelModal(false);
    setSeconds(0);

    // toast de fim de duelo
  };

  // console.log(duelistA, duelistB);

  return (
    <div className="modal">
      <div className="title">
        <h2>Atualizar Usuario</h2>
        <span onClick={() => setEndDuelModal(false)}>X</span>
      </div>

      <StyledEndDuelForm onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="duelists">
          <div className="duelistA">
            <h2>Duelista A</h2>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="nameA"
                placeholder="Nome do Duelista A"
                {...register("duelistA.name")}
              />
              <span className="error">{errors.duelistA?.name?.message}</span>
            </div>

            <div>
              <label htmlFor="deck">Deck</label>
              <input
                type="text"
                id="deckA"
                placeholder="Deck do Duelista A "
                {...register("duelistA.deck")}
              />
              <span className="error">{errors.duelistA?.deck?.message}</span>
            </div>

            <div>
              <label htmlFor="deck">Principal Card</label>
              <input
                type="text"
                id="cardA"
                placeholder="Principal Card do Duelista A "
                {...register("duelistA.principalCard")}
              />
              <span className="error">
                {errors.duelistA?.principalCard?.message}
              </span>
            </div>
          </div>

          <div className="duelistB">
            <h2>Duelista B</h2>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="nameB"
                placeholder="Nome do Duelista B"
                {...register("duelistB.name")}
              />
              <span className="error">{errors.duelistB?.name?.message}</span>
            </div>

            <div>
              <label htmlFor="deck">Deck</label>
              <input
                type="text"
                id="deckB"
                placeholder="Deck do Duelista B "
                {...register("duelistB.deck")}
              />
              <span className="error">{errors.duelistB?.deck?.message}</span>
            </div>

            <div>
              <label htmlFor="deck">Principal Card</label>
              <input
                type="text"
                id="cardB"
                placeholder="Principal Card do Duelista B "
                {...register("duelistB.principalCard")}
              />
              <span className="error">
                {errors.duelistB?.principalCard?.message}
              </span>
            </div>
          </div>
        </div>
        <h2>Vencedor do Duelo</h2>
        <div className="WinnerButton">
          <button type="button" className="winnerA">
            {duelistA?.name}{" "}
          </button>
          <button type="button" className="winnerB">
            {duelistB?.name}{" "}
          </button>
        </div>
        <button className="endDuelButton" type="submit">
          Encerrar Duelo
        </button>
      </StyledEndDuelForm>
    </div>
  );
}
