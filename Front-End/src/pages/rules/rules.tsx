import { Link } from "react-router-dom";
import { StyledRulesPage } from "./style";
import { Header } from "../../components/header/header";

export function RulesPage() {
  return (
    <>
      <StyledRulesPage>
        <Header />
        <h1>Regras a Definir</h1>
      </StyledRulesPage>
    </>
  );
}
