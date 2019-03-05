import React, { Component, ChangeEvent } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  width: string
}

const ButtonStyled = styled.button<WrapperProps>`
  align-self: center;
  border: none;
  background-color: #1abc9c;
  -webkit-box-shadow: 0 3px 0 #15987e;
  box-shadow: 0 3px 0 #15987e;
  font-size: 18px;
  color: ${(p: any) => p.theme.colors.textLight};
  padding: 12px 35px 12px 35px;
  width: ${(p: any) => p.width};
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  outline: none;
  
  :active,
  :hover {
    background-color: #15987e;
    color: white;
    -webkit-box-shadow: 0 3px 0 #1abb9c;
    box-shadow: 0 3px 0 #1abb9c;
  }
`;


const Icon = styled.i`
  width:24px;
  height:24px;
  color: ${(p: any) => p.theme.colors.textLight};
  margin-right: 10px;
`

interface Props {
  text: string;
  onClick: any;
  width: string;
  icon: string
}

const Button = ({ text, onClick, width, icon }: Props) => {
  return(
    <ButtonStyled width={width} onClick={() => onClick}>
      <Icon className={icon} />
      {text}
    </ButtonStyled>
  );
}

export default Button