import  { Container, ContainerButtons, RadioBox } from './style';
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import Modal from 'react-modal';
import { useState } from 'react';


interface TransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal ({isOpen, onRequestClose}:TransactionsModalProps) {

    const [type, setType ] =  useState('deposit')
    return (
        
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
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
      <Container>

      <h2>Cadastrar transações</h2>
            
            <input 
            placeholder='Titulo'/>
    
            <input 
            type='number'
            placeholder='preço'/>

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
        placeholder='categoria'/>

        <button
        type='submit'
        >Cadastrar</button>
        </Container>

        </Modal>
       
    );

}