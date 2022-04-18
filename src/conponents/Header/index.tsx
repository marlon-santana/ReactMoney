import LogoImg from '../../assets/logo.svg'
import { Container,Content } from './style';
import Modal from 'react-modal';
import { useState } from 'react';


export function Header () {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
return (
    <Container>
    <Content>
    <img src={LogoImg}  alt="rocketmoney" />
    <button onClick={() => openModal()}>Nova Transação</button>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
          <h2>modal aberto</h2>
      </Modal>
    </Content>
    </Container>

)

}