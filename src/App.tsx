import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { createServer, Model  } from "miragejs";
import { useState } from "react";
import { TransactionModal } from "./components/transactionModal";
import { TransactionsProvider } from "./hooks/useTransationsContext";
import { GlobalStyle }  from './styles/global';

import { ThemeProvider } from 'styled-components';
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";







createServer({
  models: {
    transaction: Model  //cria entidade de banco de dados chamada transaction
  },

  seeds(server) {
    server.create("transaction", {  id:'1',
              title: 'desenvolvimento de softwear',
              type: 'deposit',
              category: 'freelancer',
              amount: 2000,
              createdAt: new Date('2021-02-12 09:00:00') })

    server.create("transaction", {  id:'2',
              title: 'playstation',
              type: 'withdraw',
              category: 'lazer',
              amount: 5000,
              createdAt: new Date('2021-04-10 10:00:00') })
    },


  routes() {
    this.namespace = 'api';            // inicio na rota
    this.get('/transactions', () => {  // rota de get que devolve todas as transactions salvas no model transaction.
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => { //rota de post que manda o payload no corpo da req
      const data = JSON.parse(request.requestBody)
      return  schema.create('transaction',data)  // cria um arquivo novo no model transactions com obj data.
        
    })
  }
})

export function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [theme, setTheme ] = useState(light);
  console.log(theme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
   
    
    
    
  return (

    <ThemeProvider theme={theme}>
    <TransactionsProvider >
    <Header toggleTheme={() => toggleTheme()}
     onOpenModal={() => openModal()} />
    < GlobalStyle />
    <Dashboard />
    <TransactionModal
    isOpen={modalIsOpen}
    onRequestClose={ () => closeModal()} />
    </TransactionsProvider> 
    </ThemeProvider>
  )

};




