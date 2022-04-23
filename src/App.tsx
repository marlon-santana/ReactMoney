import { Dashboard } from "./conponents/dashboard";
import { Header } from "./conponents/Header";
import { createServer, Model  } from "miragejs";
import { useState } from "react";
import { TransactionModal } from "./conponents/transactionModal";


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

  // seeds(server) {
  //   server.db.loadData({
  //     transctions: [
  //       {
  //         id:1,
  //         title: 'desenvolvimento de softwear',
  //         type: 'deposit',
  //         category: 'freelancer',
  //         amount: 2000,
  //         createdAt: new Date('2021-02-12 09:00:00')

  //       },
  //       {
  //         id:1,
  //         title: 'playstation',
  //         type: 'withdraw',
  //         category: 'lazer',
  //         amount: 5000,
  //         createdAt: new Date('2021-04-10 10:00:00')

  //       }
  //     ]
  //   })
  // },

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

  function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
  return (
    <>
    <Header onOpenModal={() => openModal()} />
    <Dashboard />
    <TransactionModal
    isOpen={modalIsOpen}
    onRequestClose={ () => closeModal()} />
    
    </>
  )
    
}


