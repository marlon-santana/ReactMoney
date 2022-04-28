import LogoImg from '../../assets/logo.svg'
import { Container,Content } from './style';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';



interface HeaderProps {
    onOpenModal: () => void;
    toggleTheme(): void;
}

export function Header ({ onOpenModal, toggleTheme}: HeaderProps) {
    const {colors, title } = useContext(ThemeContext)

  
return (
    <Container>
    <Content>
    <img src={LogoImg}  alt="rocketmoney" />
    <button onClick={onOpenModal}>Nova Transação</button>
    <Switch
    onClick={()=> toggleTheme()}
    onChange={toggleTheme}
    checked={title === "light"}
    className="react-switch"
    // checkedIcon={false}
    // uncheckedIcon={false}
    // height={10}
    // width={40}
    // handleDiameter={20}
    // onColor={colors.primary}
    // offColor={colors.secundary}
    
    />
    </Content>
    </Container>

)

}