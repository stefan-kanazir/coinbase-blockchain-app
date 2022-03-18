import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { FaCheck } from 'react-icons/fa'

const CoinItem = ({
    token,
    sender,
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
}) => {
    const [balance, setBalance] = useState('Fetching...');
    const [imageUrl, setimageUrl] = useState(null);

    useEffect(() => {
        // const getBalance = async () => {
        //     let activeThirdWebToken

        //     thirdWebTokens.map(thirdWebToken => {
        //         if (thirdWebTokens === token.contractAddress) {
        //             activeThirdWebToken = thirdWebToken
        //         }
        //     })

        //     const balance = await activeThirdWebToken.balanceOf(sender)

        //     return await setBalance(balance.displayValue.split('.'[0]))
        // }
        

        const getImageUrl = async () => {
            const imageUrl = imageUrlBuilder(client).image(token.logo).url()

            setimageUrl(imageUrl)
        }


        // getBalance()
        getImageUrl()
    }, [])

    return (
        <Wrapper styled={{backgroundColor: selectedToken.name === token.name && "#141519"}}>
            <Main>
                <Icon>
                    <img src={imageUrl} />
                </Icon>
            </Main>
        </Wrapper>
    )
}

export default CoinItem

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem .5rem;
    border-radius: .5rem;
    margin-bottom: .3rem;

    &:hover {
        background-color: #0e0f14;
    }
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
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

const Name = styled.div`
    font-size: 1.1rem;
    margin-bottom: .2rem;
    `;

const isSelected = styled.div`
    margin-left: .5rem;
    color: #3773f5;
    `;

const NameDetails = styled.div``;

const Balance = styled.div``;