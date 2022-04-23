import { Dashboard } from "./conponents/dashboard";
import { Header } from "./conponents/Header";
import { createServer, Model  } from "miragejs";
import { useState } from "react";
import { TransactionModal } from "./conponents/transactionModal";


createServer({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)
      return  schema.create('transaction',data)
        
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


