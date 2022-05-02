import LogoImg from '../../assets/logo.svg'
import { Container,Content,SwitchBotom } from './style';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';



interface HeaderProps {
    onOpenModal: () => void;
    toggleTheme(): void;
}

export interface Theme {
    title: string;
  
    colors: {
      red: string,
      blue: string,
      bluelight: string
      green: string
      shape: string
      texttitle: string
      textbody: string
      background: string
    },
  }

export function Header ({ onOpenModal, toggleTheme}: HeaderProps) {
    const {title } = useContext(ThemeContext)

  
return (
    <Container>
    <Content>
    <img src={LogoImg}  alt="rocketmoney" />
    <SwitchBotom>
    <Switch
    onClick={toggleTheme}
    onChange={toggleTheme}
    checked={title === "light"}
    className="react-switch"
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    // checkedIcon={false}
    // uncheckedIcon={false}
    height={10}
    width={45}
    handleDiameter={20}
    // onColor={colors.primary}
    // offColor={colors.secundary}
    />
    <button onClick={onOpenModal}>Nova Transação</button>
    </SwitchBotom>
    </Content>
    </Container>

)

}