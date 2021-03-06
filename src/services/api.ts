import axios from "axios"
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Ubereats - Bubbletea',
          type: 'withdraw',
          category: 'Comida',
          amount: 40,
          createdAt: new Date('2021-02-02')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})