import React from 'react';
import styled, {css} from 'styled-components';
import Button from './Button';
import { Link } from "@reach/router";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
  a {
    align-self: flex-end;
    margin-right: 30px;
  }
`;

const Field = styled.div`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: ${({theme}) => theme.font.main};
  font-size: ${(props) => props.radio ? "11px" : "13px"};
  margin-bottom: 10px;
  ${props => props.radio && css`
    line-height: 15px;
    padding: 0 15px 0 0;
    position: relative;
    :before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 2px;
      background-color: white;
      border: 1px solid #009688;
      vertical-align: text-top;
      margin-right: 7px;
    }
  `}
`;

const Input = styled.input`
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  height: 30px;
  ${props => props.radio && css`
    opacity: 0;
    width: 0;             
    :checked + label:before {
      background-image: url(../assets/img/tick.svg);
      background-size: 10px;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #009688;
    }
    :hover + label:before {
      background-color: #009688;
    }
    :focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }
  `}
`;

const RadioWrapper = styled.div`
  display: flex;
`;

const inputsArray = [
  {
    name: "1. Nazwa firmy",
    type: "text",
    id: "company"
  },
  {
    name: "2. Numer NIP",
    type: "number",
    id: "NIP"
  },
  {
    name: "3. Numer REGON",
    type: "number",
    id: "REGON"
  },
  {
    name: "4. Ulica, numer lokalu",
    type: "text",
    id: "address"
  },
  {
    name: "5. Kod pocztowy",
    type: "number",
    id: "postal"
  },
  {
    name: "6. Miasto",
    type: "text",
    id: "city"
  },
  {
    name: "7. Data rozpoczęcia działalności",
    type: "date",
    id: "start_date"
  },
  {
    name: "8. Częstotliwość rozliczania podatku PIT",
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "PIT_freq"
  },
  {
    name: "9. Częstotliwość rozliczania podatku VAT", 
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "VAT_freq"
  },
  {
    name: "10. Czy przysługuje Ci preferencyjna stawka ZUS?", 
    type: "radio",
    answers: ["mały zus", "pół roku bez zusu"],
    id: "ZUS"
  }      
];


const RegisterForm = () => {
  return(
    <Form>
      {
        inputsArray.map((element,index) => {
          return(
            <Field key={index}>
              <Label>{element.name}</Label>
              { element.type !== "radio" ? (
              <Input type={element.type}/>
              ) : (
                <RadioWrapper>
                {element.answers.map(
                  answer => {
                    return(
                      <>
                      <Input id={element.id + answer} radio type={element.type} name={element.name} />
                      <Label htmlFor={element.id + answer} radio>{answer}</Label>
                      </>
                    )
                  }
                )}
                </RadioWrapper>
              )}
            </Field>
          );
        })
      }
      <Button type="full_green" as={Link} to="financial">Dalej</Button>
    </Form>
  )
};

export default RegisterForm;

