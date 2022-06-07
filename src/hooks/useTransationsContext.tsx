import { Item } from "framer-motion/types/components/Reorder/Item";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";



interface Transaction {
    id: number;
    title: String;
    value: Number;
    amount: number;
    category: string;
    type: string;
    createdAt: number;
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
            api.get('https://api-restifull.herokuapp.com/transaction')
            .then(response => {console.log(response.data[0]) 
                setTransactions(response.data.transaction)})
                
        },[]);


        async function createTransactions (transactionInput: TransactionInput ) {
           
             const response = await api.post('/transaction',{
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

  export function useTransactions () {
      const context = useContext(TransactionsContext)

      return context;
  }


