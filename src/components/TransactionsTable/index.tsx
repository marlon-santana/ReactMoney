
//import {  useTransactions } from '../../hooks/useTransationsContext';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import DeleteIcon from '@mui/icons-material/Delete';


interface Transaction {
    _id: number;
    title: String;
    value: Number;
    amount: number;
    category: string;
    type: string;
    createdAt: String;
}

export   function TransactionsTable () {

    const [ transaction, setTransaction ] = useState<Transaction[]>([]);

    useEffect(() => { 
        api.get('https://api-restifull.herokuapp.com/transaction')
        .then(response =>  {
           setTransaction(response.data);
           console.log('aqui',response.data)
        }

    )},[]);
        

        function deleteTransaction(transactionId: Number) {
              let id = transactionId;

        api.delete(`https://api-restifull.herokuapp.com/transaction/${id}`)
              .then(() => {
                alert("transaction deleted!");
                
              });
          }
    
   

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
                                
                                  <DeleteIcon className='Delete'
                                     onClick={() => {deleteTransaction(transactions._id)}  }/>
                             </td>
                        </tr>
                    
                        )
                       
                    })}
                    </tbody>
               
            </table>
        </Container>
    ) 
}