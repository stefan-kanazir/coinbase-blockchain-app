import React, { useState } from 'react'
import styled from 'styled-components'

const Transfer = () => {
    const [amount, setAmount] = useState()

  return (
      <Wrapper>
          <Ammount>
              <FlexInputContainer>
                <FlexInput 
                    placeholder='0'
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <span>ETH</span>
              </FlexInputContainer>
              <Warning>
                  Amount is required
              </Warning>
          </Ammount>
      </Wrapper>
  )
}

export default Transfer

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`;

const Ammount = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const FlexInputContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;

    & > span {
        font-size: 3rem;
        margin-bottom: .5rem;
        color: #3773f5;
    }
`;

const FlexInput = styled.input`
    border: none;
    background: none;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    flex-wrap: wrap;
    text-align: right;
    min-width: 45%;
    margin-right: 1rem;
    font-size: 4.5rem;
    color: #3773f5;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const Warning = styled.div`
    padding: 1rem 0 2rem;
    text-align: center;
    color: #8a919e;
`;