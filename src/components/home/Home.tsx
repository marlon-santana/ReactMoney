import Modal from 'react-modal';
import { Container, ContainerButtons, RadioBox } from '../transactionModal/style';


interface TransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function Home  ({isOpen, onRequestClose}:TransactionsModalProps) {
    return (

        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ='react-modal-overlay'
            className = 'react-modal-content'
        >

        <button
        type="button"
        className="react-modal-close"
      >
        <img src='' />
      </button>

      <Container  >

      <h2>Cadastrar transações</h2>
            
            <input 
            placeholder='Titulo'
            />
    
            <input 
            
            />

        <ContainerButtons>
        
            
            
          

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