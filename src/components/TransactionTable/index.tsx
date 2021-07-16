import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./style";

export function TransactionTable(){
    const data = useContext(TransactionContext)

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(a => (
                        <tr key={a.id}>
                            <td className="title" >{a.title}</td>
                            <td className={a.type}>
                                {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(a.amount)}</td>
                            <td>{a.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-br').format(
                                new Date(a.createdAt)
                            )}</td>
                        </tr>   
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}