import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style'

interface TransactionModalProps {
    open: boolean;
    onModalClose: () => void;
}

export default function TransactionModal({ open, onModalClose }: TransactionModalProps){
    const [type, setType] = useState('')


    return(
        <Modal 
         isOpen={open}
         onRequestClose={onModalClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
        >

            <button onClick={onModalClose}>
                <img  
                 src={closeImg} 
                 alt="fechar modal" 
                 className="react-modal-close" 
                />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                 placeholder="Título"
                />

                <input
                 type="number"
                 placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox 
                     type="button"
                     onClick={() => setType('deposit')}
                     isActive={type === 'deposit'}
                    >
                        <img src={income} alt="income" />
                        <span>Entrada</span>
                     </RadioBox>
                    
                    <RadioBox 
                     type="button"
                     onClick={() => setType('withdraw')}
                     isActive={type === 'withdraw'}
                    >
                        <img src={outcome} alt="outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                 placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}