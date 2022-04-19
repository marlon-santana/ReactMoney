import  { Container } from './style';
import Modal from 'react-modal';


interface TransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal ({isOpen, onRequestClose}:TransactionsModalProps) {
    return (
        <Container>
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>modal aberto</h2>
        </Modal>
        </Container>
    );

}