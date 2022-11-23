import { Summary } from "../Summary";

import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
