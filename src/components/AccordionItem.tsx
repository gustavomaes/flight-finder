import React, { Component } from 'react';
import styled from 'styled-components';

const WrapperItem = styled.div`
  cursor: pointer;
`

interface OpenedInterface {
  opened: boolean
}

const Line = styled.div`
  display: block;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 2;
  position: relative;
`

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 700;
`

const Icon = styled.i<OpenedInterface>`
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease-in-out;
  opacity: 0.6;
  ${(p: any) => p.opened && `
    transform: rotate(180deg);
  `}
`

const Inner = styled.div<OpenedInterface>`
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;
  ${(p: any) => p.opened && `
    max-height: 1000px;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  `}
`

const Content = styled.div<OpenedInterface>`
  opacity: 0;
  transform: translateY(-10px);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 0 12px 12px;
  ${(p: any) => p.opened && `
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  `}
`

const Paragraph = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
`


class AccordionItem extends React.Component<any> {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <WrapperItem onClick={() => { this.setState({ opened: !opened }) }}>
        <Line>
          <Title>
            {title}
          </Title>
          <Icon className="fas fa-angle-down" opened={opened}/>
        </Line>
          <Inner opened={opened}>
            <Content opened={opened}>
              <Paragraph>
                {paragraph}
              </Paragraph>
            </Content>
          </Inner>
      </WrapperItem>
    )
  }
}

export default AccordionItem