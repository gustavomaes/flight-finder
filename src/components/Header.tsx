import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'
const HeaderStyled = styled.div`
  background-color: ${(p: any) => p.theme.colors.primaryBackground};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  width: 100%;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
`

const Header = () => {
    return(
        <HeaderStyled>
          <Logo src={LogoImg} />
        </HeaderStyled>
    );
}

export default Header