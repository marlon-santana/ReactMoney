import { useEffect } from 'react';
import { Container } from './style';
import { api } from '../../services/api';



export function TransactionsTable () {
    useEffect(() => { 
        api.get('http://localhost:3000/api/transactions')
        .then(response => console.log(response.data))
    
    },[])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td>notebook</td>
                        <td className='withdraw'>R$500</td>
                        <td>compras</td>
                        <td>16/04/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento</td>
                        <td className='deposit'>R$1.000</td>
                        <td>serviços</td>
                        <td>20/04/2021</td>
                    </tr>

                    <tr>
                        <td>internet</td>
                        <td className='withdraw'>R$200</td>
                        <td>contas</td>
                        <td>30/04/2021</td>
                    </tr>
                </thead>
            </table>
        </Container>
    )
}