import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: ${(p: any) => p.theme.colors.secondary};
  display: flex;
  height: 60px;
  width: 100%;
`;

const Details = () => {
    return(
       <h1>DETAILS</h1>
    );
}

export default Details