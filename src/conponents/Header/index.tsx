import LogoImg from '../../assets/logo.svg'
import { Container,Content } from './style';



interface HeaderProps {
    onOpenModal: () => void;
}

export function Header ({ onOpenModal }: HeaderProps) {

  
return (
    <Container>
    <Content>
    <img src={LogoImg}  alt="rocketmoney" />
    <button onClick={onOpenModal}>Nova Transação</button>
    </Content>
    </Container>

)

}