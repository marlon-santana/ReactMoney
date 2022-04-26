import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";



interface Transaction {
    id: number;
    title: String;
    value: Number;
    amount: number;
    category: string;
    type: string;
    createdAt: String;
}

interface TransactionInput {
    title: String;
    amount: number;
    category: string;
    type: string;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransactions: (transaction : TransactionInput) => Promise<void>;

    
}


interface ProviderProps {
    children: ReactNode;
    
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);



  export function TransactionsProvider ({children}: ProviderProps)  {

        const [transactions, setTransactions ] = useState<Transaction[]>([])

        useEffect(() => { 
            api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions))

        },[]);


        async function createTransactions (transactionInput: TransactionInput ) {
           
        
             const response = await api.post('/transactions',{
                 ...transactionInput,
                createdAt: new Date()
            })
             const { transaction } = response.data;
             setTransactions([
                 ...transactions,
                 transaction,
             ])
        }

        return (
            <TransactionsContext.Provider value={{transactions, createTransactions}}>
                 {children }
            </TransactionsContext.Provider>
        )
  } 


