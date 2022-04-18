import { Dashboard } from "./conponents/dashboard";
import { Header } from "./conponents/Header";
import { createServer  } from "miragejs";
import { useState } from "react";
import Modal from 'react-modal';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          categori: 'food',
          createdAt: new Date(),
        }
      ]
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
    <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
          <h2>modal aberto</h2>
      </Modal>
    
   
    </>
  )
    
}


