import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { api } from '../../services/api'
import { Container, TransactionTypeContainer, RadioBox } from './style'

interface TransactionModalProps {
    open: boolean;
    onModalClose: () => void;
}

export default function TransactionModal({ open, onModalClose }: TransactionModalProps){
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type,
        }

        api.post('/transactions', data)
    }

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

            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar transação</h2>

                <input 
                 placeholder="Título"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />

                <input
                 type="number"
                 placeholder="Valor"
                 value={value}
                 onChange={(e) => setValue(+e.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                     type="button"
                     onClick={() => setType('deposit')}
                     isActive={type === 'deposit'}
                     activeColor="green"
                    >
                        <img src={income} alt="income" />
                        <span>Entrada</span>
                     </RadioBox>
                    
                    <RadioBox 
                     type="button"
                     onClick={() => setType('withdraw')}
                     isActive={type === 'withdraw'}
                     activeColor="red"
                    >
                        <img src={outcome} alt="outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                 placeholder="Categoria"
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}