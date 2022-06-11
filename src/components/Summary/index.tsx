import { Container } from "./style"
import  incomeIcon   from "../../assets/income.svg"
import  outcomeIcon   from "../../assets/outcome.svg"
import  total   from "../../assets/total.svg"
import { useContext } from "react"
import { TransactionsContext, useTransactions } from "../../hooks/useTransationsContext"



export  function Summary () {

    const  {transaction}  = useTransactions();

    const summary = transaction.reduce(
        (acc, transaction) => {
          if (transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
          } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
          }
    
          return acc;
        },
        {
          deposits: 0,
          withdraw: 0,
          total: 0,
        }
      );
    

    return (
        <Container>
        <div>
            <header>
                <p>Entradas</p>
                 <img src={incomeIcon}   />
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
                 }).format(summary.deposits)}
            </strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                 <img src={outcomeIcon}   />
            </header>
            <strong> -
            {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
                 }).format(summary.withdraw)}
            </strong>
        </div>

        <div className="hightlight-background">
            <header>
                <p>Total</p>
                 <img src={total}   />
            </header>
            <strong>
                {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
                 }).format(summary.total)}
                
                </strong>
        </div>

        </Container>
    )
}