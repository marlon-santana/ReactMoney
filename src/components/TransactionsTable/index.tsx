
import {  useTransactions } from '../../hooks/useTransationsContext';
import { Container } from './style';
import Delete from '../../assets/excluir.png';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


interface Transaction {
    _id: number;
    title: String;
    value: Number;
    amount: number;
    category: string;
    type: string;
    createdAt: number;
}

export   function TransactionsTable () {

    useEffect(() => { 
        api.get('https://api-restifull.herokuapp.com/transaction')
        .then(response =>  {
           setTransaction(response.data);
           console.log('aqui',response.data)
        }

    )},[]);
        const [ transaction, setTransaction ] = useState<Transaction[]>([]);
     //const {transactions }  = useTransactions();
    
     console.log(transaction)

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
                   
                    {transaction.map(transactions => {
                        return (
                    
                        <tr key={transactions._id}>
                            
                            <td >{transactions.title}</td>
                            <td className={transactions.type}>
                            <td>
                                {transactions.amount}
                            </td>
                               
                            </td>
                            <td >{transactions.category}</td>
                            <td>
                                {transactions.createdAt}
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