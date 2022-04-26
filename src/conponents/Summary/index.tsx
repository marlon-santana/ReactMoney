import { Container } from "./style"
import  incomeIcon   from "../../assets/income.svg"
import  outcomeIcon   from "../../assets/outcome.svg"
import  total   from "../../assets/total.svg"
import { useContext } from "react"
import { TransactionsContext } from "../../TransationsContext"


export function Summary () {

    const  transactions  = useContext(TransactionsContext);

    return (
        <Container>
        <div>
            <header>
                <p>Entradas</p>
                 <img src={incomeIcon}   />
            </header>
            <strong>R$1.000,00</strong>
        </div>

        <div>
            <header>
                <p>Saidas</p>
                 <img src={outcomeIcon}   />
            </header>
            <strong> - R$500</strong>
        </div>

        <div className="hightlight-background">
            <header>
                <p>Total</p>
                 <img src={total}   />
            </header>
            <strong>R$1.000,00</strong>
        </div>

        </Container>
    )
}