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

interface ProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);



  export function TransactionsProvider ({children}: ProviderProps)  {

        const [transactions, setTransactions ] = useState<Transaction[]>([])

        useEffect(() => { 
            api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions))

        },[]);

        return (
            <TransactionsContext.Provider value={transactions}>
                 {children }
            </TransactionsContext.Provider>
        )
  } 


