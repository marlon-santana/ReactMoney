import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";



interface Transaction {
    _id: number;
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
    transaction: Transaction[];
    createTransactions: (transaction : TransactionInput) => Promise<void>;

    
}


interface ProviderProps {
    children: ReactNode;
    
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);



  export function TransactionsProvider ({children}: ProviderProps)  {

        const [transaction, setTransaction ] = useState<Transaction[]>([])
        

        useEffect(() => { 
            api.get('https://api-restifull.herokuapp.com/transaction')
            .then(response => {
                setTransaction(response.data)})
        

        },[]);


        async function createTransactions (transactionInput: TransactionInput ) {
           
             const response = await api.post('https://api-restifull.herokuapp.com/transaction',{
                 ...transactionInput,
                createdAt: new Date()
            })
             const { transaction } = response.data;
             setTransaction([
                 ...transaction,
                 transaction,
             ])
        }

        

        return (
            <TransactionsContext.Provider value={{transaction, createTransactions}}>
                 {children }
            </TransactionsContext.Provider>
        )
  } 

  export function useTransactions () {
      const context = useContext(TransactionsContext)

      return context;
  }


