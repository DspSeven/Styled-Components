import Styled from 'styled-components'

export const Heading = Styled.h1`
color: #0070c1;
font-family: "Roboto";`

export const CustomButton = Styled.button`padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};`
