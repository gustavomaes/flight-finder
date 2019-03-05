import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import Input from '../components/common/Input';
import InputList from '../components/common/InputList';
import InputDate from '../components/common/InputDate';
import Button from '../components/common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p: any) => p.theme.colors.primaryBackground};
`;

const Section = styled.div`
  display: flex;
  background-image: ${(p: any) => `linear-gradient(90deg,${p.theme.colors.primary},${p.theme.colors.primaryLight});`};
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p: any) => p.theme.colors.secondaryBackground};
  border-radius: 10px;
  border-width: .5px;
  box-shadow: ${(p: any) => p.theme.colors.shadow};
  padding: 10px;
  width: 60%;
`;

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 100%;
`;

const WrapperHalfLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 48%;
`;

const WrapperFlights = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

interface State {
  flyingFrom: string
  flyingTo: string
  departing: string
  returning: string
  travelers: number
}

class Finder extends React.Component {

  public state = {
    flyingFrom: "",
    flyingTo: "",
    departing: "",
    returning: "",
    travelers: 0
  }

  public render() {
    const { flyingFrom, flyingTo, departing, returning, travelers } = this.state

    return (
      <Wrapper>
        <Section>
          <Card>
          <WrapperInput>
              <InputList
                icon="fas fa-plane-departure"
                label="Sair de"
                placeholder="Aeroporto de Origem"
                setText={() => {}}
                value={flyingFrom}
                onChange={(selectedOption: string) => this.setState({ flyingFrom: selectedOption })}
                suggestions={[
                  "Alligator",
                  "Bask",
                  "Crocodilian",
                  "Death Roll",
                  "Eggs",
                  "Jaws",
                  "Reptile",
                  "Solitary",
                  "Tail",
                  "Wetlands"
                ]}
              />
              <InputList
                icon="fas fa-plane-arrival"
                label="Ir para"
                placeholder="Aeroporto de Destino"
                setText={() => {}}
                value={flyingTo}
                onChange={(selectedOption: string) => this.setState({ flyingTo: selectedOption })}
                suggestions={[
                  "Alligator",
                  "Bask",
                  "Crocodilian",
                  "Death Roll",
                  "Eggs",
                  "Jaws",
                  "Reptile",
                  "Solitary",
                  "Tail",
                  "Wetlands"
                ]}
              />
          </WrapperInput>
          <WrapperInput>
            <WrapperHalfLine>
              <InputDate icon="far fa-calendar-alt" label="Data de ida" value={departing} placeholder="Selecione" onChange={(formatDate: string) => this.setState({ departing: formatDate })} width="48%"/>
              <InputDate icon="far fa-calendar-alt" label="Data de volta" value={returning} placeholder="Selecione" onChange={(formatDate: string) => this.setState({ returning: formatDate })}  width="48%"/>
            </WrapperHalfLine>
            <WrapperHalfLine>
              <Input icon="fas fa-users" label="Passageiros" value={travelers} placeholder="Numero de Passageiros" onChange={(e: any) => { this.setState({ travelers: e.target.value})}} width="48%" numeric={true}/> 
              <Button icon="fas fa-search" text="Pesquisar" onClick={() => {}} width="48%" />
            </WrapperHalfLine>
          </WrapperInput>
          </Card>
        </Section>
        <WrapperFlights>
          <p>AAAA</p>
          <p>AAAA</p>
          <p>AAAA</p>
          <p>AAAA</p>
          <p>AAAA</p>
          <p>AAAA</p>
        </WrapperFlights>
      </Wrapper>
    );
  }
}

export default Finder