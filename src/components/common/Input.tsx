import React, { Component, ChangeEvent } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

interface WrapperProps {
  width: string
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
    width: ${(p:any) => p.width};
`;

const Label = styled.label`
  font-size: 12px;
`

const InputStyled = styled.input`
  width: 100%;
  padding: 12px 35px 12px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: ${(p: any) => `.5px solid ${p.theme.colors.border}`};
  transition: 0.5s;
  outline: none;
  font-size: 16px;
  color: ${(p: any) => p.theme.colors.primary};
  font-weight: 700;

  :focus {
    border: ${(p: any) => `.5px solid ${p.theme.colors.secondary}`};
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 700;
    color: #CCC;
  }
`

const Icon = styled.i`
  position:absolute;
  top:22px;
  right:10px;
  width:24px;
  height:24px;
  color: ${(p: any) => p.theme.colors.secondary};
`

const WrapperInput = styled.div`
  position:relative;
`

interface Props {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: any;
  width: string;
  icon: string
  numeric?: boolean
}

const Input = ({ label, placeholder, value, onChange, width, icon, numeric = false }: Props) => {
  return(
    <Wrapper width={width}>
      <Label>{label}</Label>
      <WrapperInput>
        <InputStyled placeholder={placeholder} onChange={(e: any) => onChange(e)} type={numeric ? "number" : "none"} value={value}/>
        <Icon className={icon} />
      </WrapperInput>
    </Wrapper>
  );
}

export default Input