
import {  useTransactions } from '../../hooks/useTransationsContext';
import { Container } from './style';
import Delete from '../../assets/excluir.png';
import { Button } from '@material-ui/core';







export function TransactionsTable () {
    const {transactions }  = useTransactions();
   
   
   
    

    return (
        <Container>
            <table >
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

                        return (
                    
                        <tr key={transaction.id}>
                            
                            <td >{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td >{transaction.category}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt),
                                
                                 )}
                             </td> 
                             <td >
                                 <Button size={"small"}  style={{ borderRadius: '50%' }}
                    
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