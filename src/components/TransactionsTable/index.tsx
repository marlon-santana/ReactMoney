
import {  useTransactions } from '../../hooks/useTransationsContext';
import { Container } from './style';
import Delete from '../../assets/excluir.png';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';




export function TransactionsTable () {
    const {transactions }  = useTransactions();

    const [item, setItem] = useState('')
    const [id, setId] = useState(0)

function HandleDelete(id: number) {

    const filtered = transactions.filter(item => item.id === id)
 
        setId(filtered[0].id)
        setItem(filtered[0].id === id ? 'apagado' : '')
     
}  


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                     
                    {transactions.map(transaction => {
                        console.log(transaction)
                        return (
                           
                        <tr className={item} key={transaction.id}  >
                            <td >{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt),
                                
                                 )}
                             </td> 
                            
                             <td>
                                 <Button size={"small"}  style={{ borderRadius: '50%' }}
                                 onClick={() => HandleDelete(transaction.id) }
                                 >
                                     <img src={Delete}></img>
                                 </Button>
                             </td>
                        </tr>
                    
                        )
                       
                    })}
                    </tbody>
               
            </table>
        </Container>
    ) 
}