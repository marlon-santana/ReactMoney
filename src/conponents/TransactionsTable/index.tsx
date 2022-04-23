import { useEffect, useState } from 'react';
import { Container } from './style';
import { api } from '../../services/api';



export function TransactionsTable () {

    interface Transaction {
        id: number;
        title: String;
        value: Number;
        amount: number;
        category: string;
        type: string;
        createdAt: String;
    }

    const [transactions, setTransactions ] = useState<Transaction[]>([])

    useEffect(() => { 
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    
    },[])


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
                        return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {transaction.createdAt}
                               
                             </td>
                        </tr>

                        )
                    })}
                   
                    </tbody>
               
            </table>
        </Container>
    )
}