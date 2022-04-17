import { Dashboard } from "./conponents/dashboard";
import { Header } from "./conponents/Header";
import { createServer  } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          categori: 'food',
          createdAt: new Date(),
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
    <Header />
    <Dashboard />
    
   
    </>
  )
    
}


