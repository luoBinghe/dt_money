import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface TransactionType {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext<TransactionType[]>([])

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [data, setData] = useState<TransactionType[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setData(response.data.transactions))
    }, [])

    return(
        <TransactionContext.Provider value={data} >
            {children}
        </TransactionContext.Provider>
    )
}