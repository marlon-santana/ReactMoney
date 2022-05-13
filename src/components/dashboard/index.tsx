import { Container, ContainerBackground } from "./styles"
import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable";



export function Dashboard () {
    return (
        <ContainerBackground>
        <Container>
        <Summary />
        <TransactionsTable />
        </Container>
        </ContainerBackground>
    )
}