import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { BiCopy } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'

const Receive = ({setAction, selectedToken, walletAddress}) => {
    const [imageUrl, setImageUrl] = useState(null)
    const [copied, setCopied] = useState(false)

    console.log(selectedToken)

    useEffect(() => {
        const url = imageUrlBuilder(client).image(selectedToken.logo).url()
        setImageUrl(url)
    }, [selectedToken])

    return (
        <Wrapper>
            <Content>
                <QRContainer>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`} alt="QR Code"/>
                </QRContainer>
                <Divider />
                <Row>
                    <CoinSelectList>
                        <Icon>
                            <img src={imageUrl} alt={selectedToken.name} />
                        </Icon>
                        <CoinName>{selectedToken.name}</CoinName>
                    </CoinSelectList>
                </Row>
                <Divider />
                <Row>
                    <div>
                        <Title>{selectedToken.symbol} Address</Title>
                        <Address>{walletAddress}</Address>
                    </div>
                    <CopyButton onClick={() => {
                        navigator.clipboard.writeText(walletAddress)
                        setCopied(true)
                    }}>
                        {copied ? <FaCheck style={{ color: '#27ad75' }} /> : <BiCopy />}
                    </CopyButton>
                </Row>
            </Content>
        </Wrapper>
    )
}

export default Receive

const Wrapper = styled.div`
    height: 100%;
`;

const Content = styled.div`
    border: 1px solid #282b2f;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const QRContainer = styled.div`
    display: flex;
    display: grid;
    place-items: center;
`;

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: #81919e;
    padding: 1rem;
    font-size: 1.2rem;
`;

const Icon = styled.div`
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    place-items: center;

    & > img {
        height: 120%;
        width: 120%;
        object-fit: cover;
    }
`;

const CoinSelectList = styled.div`
    display: flex;
    flex: 1.3;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const CoinName = styled.div`
    flex: 1;
    border: none;
    background: none;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    flex-wrap: wrap;
    margin-right: .5rem;
`;

const Title = styled.div`
    color: #fff;
    margin-bottom: .5rem;
`;

const Address = styled.div`
    font-size: .8rem;
`;

const CopyButton = styled.div`
    cursor: pointer;
`;
