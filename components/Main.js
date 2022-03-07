import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'

const Main = () => {
  return (
    <Wrapper>
        <Portfolio />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    max-width: calc(100vh - 64px);
    overflow: hidden;

    & div {
        border-radius: .4rem;
    }
`;