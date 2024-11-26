// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(#161617, #161617, #3c2940);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageEl = styled.img`
  height: 80px;
  width: 80px;
`

export const Description = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: #ffffff;
  background-color: #06b6d4;
  font-size: 16px;
  margin-top: 100px;
  cursor: pointer;
  font-family: 'Roboto';
`
