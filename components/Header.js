import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

Modal.setAppElement('#__next')

const Header = ({walletAddress, connectWallet, sanityTokens, thirdWebTokens}) => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: '0',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)'
    }
  };

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
            </WalletAddress>
          </WalletLink>
          ) : (
            <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
          )
        }
        <Button style={{backgroundColor: '#3773f5', color: '#000'}}>
          Buy / Sell
        </Button>
        <Link href={'/?transfer=1'}>
          <Button>
            Send / Receive
          </Button>
        </Link>
      </ButtonsContainer>
      <Modal 
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <TransferModal sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress} />
      </Modal>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;

  &:not(:last-child){
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    text-align: center;

    &:not(:last-child){
      margin-right: 0;
    }
  }
`;

const WalletLink = styled.div`
  border: 1px solid #282b2f;
  border-radius: 50rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0.8rem;
    margin-right: 0;
  }
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: .3rem;
  color: #27ad75;
  font-weight: 600;
`;

const WalletAddress = styled.div`
  font-size: .8rem;
`;