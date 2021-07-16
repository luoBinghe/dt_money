import axios from "axios"
import { createServer } from 'miragejs'

createServer({
    routes(){
      this.namespace = 'api'
  
      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createAt: new Date()
          }
        ]
      })
    }
  })

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})