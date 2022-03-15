import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = ({thirdWebTokens, sanityTokens, walletAddress}) => {
  return (
    <Wrapper>
        <Portfolio 
          walletAddress={walletAddress}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Promos />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-width: calc(100vw - 64px);
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
      border-radius: .4rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;
