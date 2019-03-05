import React, { Component, ChangeEvent } from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils from 'react-day-picker/moment';

import moment from 'moment';
import 'moment/locale/pt-br';

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
  value: string;
  onChange: any;
  width: string;
  icon: string
}

class InputDate extends React.Component<Props> {

  public formatDate = (date: Date, format = 'L', locale = 'en') => {
    const formatDate = moment(date)
      .locale(locale)
      .format(Array.isArray(format) ? format[0] : format);

    this.props.onChange(formatDate)
    return formatDate

  }

  public render() {
    const { label, placeholder, value, onChange, width, icon} = this.props

      return(
        <Wrapper width={width}>
          <Label>{label}</Label>
            <DayPickerInput
              component={(props: any) => (
                <WrapperInput>
                  <InputStyled placeholder={placeholder} {...props} value={value}/>
                  <Icon className={icon} />
                </WrapperInput>
            
              )}
              formatDate={this.formatDate}
              format="L"
              placeholder={placeholder}
              dayPickerProps={{
                locale: 'pt-br',
                localeUtils: MomentLocaleUtils,
              }}  
            /> 
          
        </Wrapper>
      );
  }
}

export default InputDate