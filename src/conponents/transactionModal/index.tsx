import  { Container } from './style';
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import Modal from 'react-modal';


interface TransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal ({isOpen, onRequestClose}:TransactionsModalProps) {
    return (
        
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar transações</h2>
            <Container>
        <input 
        placeholder='nome'/>

        <input 
        placeholder='preço'/>

        <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>
      
        <button>Saida</button>

        <input 
        placeholder='categoria'/>

        <button>Cadastrar</button>
        </Container>

        </Modal>
       
    );

}