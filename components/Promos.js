import React from 'react'
import styled from 'styled-components'

const Promos = () => {
  return (
    <Wrapper>
        <OfferCard>
            <Title>Yield earned</Title>
            <Description>Earn up to 2.84% APY on your crypto</Description>          
            <Additional style={{ fontSize: '1.5rem' }}>
                $0.000066 <span>2.84% APY</span>
            </Additional>
        </OfferCard>

        <OfferCard>
            <Title>Learn and Earn</Title>
            <Description>Earn up to 2.84% APY on your crypto</Description>            
            <Additional style={{ color: '#3773f5' }}>Verify identity</Additional>
        </OfferCard>
    </Wrapper>
  )
}

export default Promos

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;

    @media screen and (max-width: 768px) {
        padding-left: 1rem;
    }
`;

const OfferCard = styled.div`
    border: 1px solid #282b2f;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
`;

const Description = styled.div`
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
`;

const Additional = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919e;
        font-size: 1rem;
    }
`;