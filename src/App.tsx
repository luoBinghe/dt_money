import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import TransactionModal from "./components/TransactionModal";

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewModalTransaction(){
      setIsNewTransactionModalOpen(false)
  }

  function handleOpenNewModalTransaction(){
    setIsNewTransactionModalOpen(true)
  }

  return (
    <>
      <Header onOpenModalTransaction={handleOpenNewModalTransaction} />
      <Dashboard />
      <TransactionModal open={isNewTransactionModalOpen} onModalClose={handleCloseNewModalTransaction} />
      <GlobalStyle />
    </>
  );
}

export default App;
