import React, { Component, Fragment } from "react";
import styled from 'styled-components';

interface WrapperProps {
  width: string
}

const SuggestionList = styled.ul<WrapperProps>`
  position: absolute;
  top: 51px;
  left: 0;
  border: ${(p: any) => `1px solid ${p.theme.colors.secondary}`};
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 200px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
`

const SuggestionItem = styled.li`
  padding: 0.7rem;
  border-left-width: 0;
  border-right-width: 0;
  border: ${(p: any) => `0px solid ${p.theme.colors.border}`};
  

  ::selection,
  :hover {
   background-color: ${(p: any) => p.theme.colors.border};
   color: #fff;
   cursor: pointer;
   font-weight: 700;
  }
`

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
  suggestions: string[]
  label: string
  placeholder: string
  value: string
  setText: any
  icon: string
  onChange: (selectedOption: string) => void
}

interface State {
  activeSuggestion: number
  filteredSuggestions: string[]
  showSuggestions: boolean
  selected: boolean
}

class InputList extends Component<Props, State> {

    public state = {
      selected: false,
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
    };
  
  public handleChange = (e: any) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      selected: true,
    });

    this.props.onChange(userInput)
  };

  public onClick = (e: any) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      selected: true
    });

    this.props.onChange(e.currentTarget.innerText)
  };

  public render() {
    const { handleChange, onClick } = this;
    const { filteredSuggestions, showSuggestions } = this.state
    const { label, placeholder, icon, value } = this.props

    let suggestionsListComponent;

    if (showSuggestions && value) {
      suggestionsListComponent = (
        <SuggestionList width="48%">
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <SuggestionItem key={index} onClick={onClick}>
                {suggestion}
              </SuggestionItem>
            );
          })}
        </SuggestionList>
      );
    }

    return (
      <Wrapper width={"48%"}>
        <Label>{label}</Label>
        <WrapperInput>
          <InputStyled placeholder={placeholder} onChange={handleChange} value={value} />
          <Icon className={icon} />
          {suggestionsListComponent}
        </WrapperInput>
      </Wrapper>
    );
  }
}

export default InputList;
