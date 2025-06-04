import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <StyledHeader>
      <h1>Duelo na Dimensão</h1>

      <ul>
        <Link to="/dash">Duelo</Link>

        <Link to="/duelists">Duelistas</Link>

        <Link to="/duels">Duelos</Link>

        <Link to="/rules">Regras</Link>
      </ul>
    </StyledHeader>
  );
}
