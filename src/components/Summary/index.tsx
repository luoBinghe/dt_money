import { useContext } from 'react'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'
import {Container} from './styles'


export function Summary(){
    const data = useContext(TransactionContext)

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="income" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="outcome" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}