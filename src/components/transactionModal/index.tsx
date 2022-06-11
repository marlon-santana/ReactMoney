import  { Container, ContainerButtons, RadioBox } from './style';
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import Modal from 'react-modal';
import { FormEvent, useEffect, useState } from 'react';
import {  useTransactions } from '../../hooks/useTransationsContext';



interface TransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function TransactionModal ({isOpen, onRequestClose}:TransactionsModalProps) {

  const { createTransactions } = useTransactions();

    const [title, setTitle] = useState('')
    const [amount, setamount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType ] =  useState('deposit')


    async function newTransaction (event: FormEvent) {
      event.preventDefault();

      await createTransactions({
        title,
        amount,
        category,
        type,
      })
      onRequestClose();
      setTitle('')
      setamount(0)
      setCategory('')
      setType('deposit')
    };


    return (
        
        <Modal 
            isOpen={isOpen}
            onRequestClose={() => console.log('fechou aqui')}
            overlayClassName ='react-modal-overlay'
            className = 'react-modal-content'
        >

        <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>

      <Container onSubmit={newTransaction} >

      <h2>Cadastrar transações</h2>
            
            <input 
            placeholder='Titulo'
            value={title}
            onChange={event => setTitle(event.target.value) }/>
    
            <input 
            type='number'
            placeholder='preço'
            value={amount}
            onChange={event => setamount(Number(event.target.value)) }
            />

        <ContainerButtons>
        <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => {
              setType("deposit");
            }}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </ContainerButtons>
       

        <input 
        placeholder='categoria'
        value={category}
        onChange={event => setCategory(event.target.value) }
        />

        <button
        type='submit'
        onClick={()=> onRequestClose}
        >Cadastrar</button>
        </Container>

        </Modal>
       
    );

}