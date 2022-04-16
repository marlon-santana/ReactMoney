import { Container } from "./style"
import  incomeIcon   from "../../assets/income.svg"
import  outcomeIcon   from "../../assets/outcome.svg"
import  total   from "../../assets/total.svg"

export function Summary () {
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