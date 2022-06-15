import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { createServer, Model  } from "miragejs";
import { useEffect, useState } from "react";
import { TransactionModal } from "./components/transactionModal";
import { TransactionsProvider } from "./hooks/useTransationsContext";
import { GlobalStyle }  from './styles/global';

import { Outlet,Link } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { convertToObject } from "typescript";





export function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
   
    
    useEffect(() => {
      console.log('clicou pra fechar')
    },[modalIsOpen])
    
  return (

    <ThemeProvider theme={theme}>
    <TransactionsProvider >
    <Header toggleTheme={() => toggleTheme()}
     onOpenModal={() => openModal()} />
    < GlobalStyle />
    <Dashboard />

    <Link to= '/'>HOME</Link>
    <Outlet/>
  
    <TransactionModal
    isOpen={modalIsOpen}
    onRequestClose={ () => closeModal()} />
    </TransactionsProvider> 
    </ThemeProvider>
  )

};




