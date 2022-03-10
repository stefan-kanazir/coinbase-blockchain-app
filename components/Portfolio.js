import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import Coin from './Coin'
import BalanceChart from './BalanceChart'

const Portfolio = () => {
    const [sanityTokens, setSanityTokens] = useState([])

    useEffect(() => {
        const getCoins = async() => {
            try {
                const coins = await fetch("https://zglgr2ev.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20eurPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
                const tempSanityTokens = await coins.json()
                console.log(tempSanityTokens.result)
                setSanityTokens(tempSanityTokens.result)
            } catch (error) {
                console.log(error)
            }
        }

        return getCoins()
    }, [])

  return (
    <Wrapper>
        <Content>
            <Chart>
                <div>
                    <Balance>
                        <BalanceTitle>Portoflio balance</BalanceTitle>
                        <BalanceValue>
                            {'€'} 
                            {/* {walletBalance.toLocaleString()} */}
                            46.000
                        </BalanceValue>
                    </Balance>
                </div>
                <BalanceChart />
            </Chart>
            <PortfolioTable>
                <TableItem>
                    <Title>Your Assets</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex: 3}}>Name</div>
                            <div style={{ flex: 2}}>Balance</div>
                            <div style={{ flex: 1}}>Price</div>
                            <div style={{ flex: 1}}>Allocation</div>
                            <div style={{ flex: 0}}>
                                <BsThreeDotsVertical />
                            </div>
                        </TableRow>
                    </TableItem>
                    <Divider />
                    <div>{coins.map(coin => (
                        <div>
                            <Coin coin={coin} />
                            <Divider />
                        </div>   
                    ))}</div>
                </Table>
            </PortfolioTable>
        </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const Content = styled.div`
    width: 100%;
    padding: 2rem 1rem;
`;

const Chart = styled.div`
    border: 1px solid #282b2f;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
    color: #8a919e;
    font-size: 0.9rem;
`;

const BalanceValue = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
    border: 1px solid #282b2f;
`;

const Table = styled.table`
    width: 100%;
`;

const TableRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: center;

    & > th {
        text-align: left;
    }
`;

const TableItem = styled.div`
    padding: 1rem 2rem;
`;

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;
