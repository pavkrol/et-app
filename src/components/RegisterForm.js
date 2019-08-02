import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';
import { navigate } from "@reach/router";
import Label from './Label';
import Input from './Input';
import { inputsArray } from '../data/inputsArray';
import Description from './Description';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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

const RadioWrapper = styled.div`
  display: flex;
`;

const RegisterForm = ({dataFn}) => {

  const [company, setCompany] = useState({});
  
  const handleDataChange = (key, value) => {
    setCompany({ ...company,
        [key]: value,
      }
    );
  };

  const validateNIP = (NIP) => {
    const result = (NIP[0] * 6) + (NIP[1] * 5) + (NIP[2] * 7) + (NIP[3] * 2) + (NIP[4] * 3) + (NIP[5] * 4) + (NIP[6] * 5) + (NIP[7] * 6) + (NIP[8] * 7);
    if (NIP.length === 10 && parseInt(NIP, 10) > 0 && result%11 === parseInt(NIP[9])) return true;
    else return false;
  }

  const validateREGON = (REGON) => {
    let result;
    if (REGON.length === 9) {
      result = (REGON[0] * 8) + (REGON[1] * 9) + (REGON[2] * 2) + (REGON[3] * 3) + (REGON[4] * 4) + (REGON[5] * 5) + (REGON[6] * 6) + (REGON[7] * 7);
      if(result%11 === parseInt(REGON[8])) return true;
      else return false;
    } else if (REGON.length === 14) {
      result = (REGON[0] * 2) + 
               (REGON[1] * 4) + 
               (REGON[2] * 8) + 
               (REGON[3] * 5) + 
               (REGON[4] * 0) + 
               (REGON[5] * 9) + 
               (REGON[6] * 7) + 
               (REGON[7] * 3) +
               (REGON[8] * 6) +
               (REGON[9] * 1) +
               (REGON[10] * 2) +
               (REGON[11] * 4) +
               (REGON[12] * 8);
      if((result%11 === parseInt(REGON[13])) || (result%11 === 10 && parseInt(REGON[13]) === 0)) return true;
      else return false;
    } else {
      return false;
    }
  }

  const validateFields = (e, company) => {
    e.preventDefault();
    let fieldsAreValid = false;
    dataFn(company);
    if(validateNIP(company.NIP)) fieldsAreValid = true;
    if(fieldsAreValid) navigate("register/financial");
  };

  return(
    <Form noValidate onSubmit={(e) => validateFields(e, company)}>
      <Description>Żeby rozpocząć pracę z programem konieczne jest podanie kilku danych dotyczących Twojej działalności.</Description>
      {
        inputsArray.map((element,index) => {
          return(
            <Field key={index}>
              <Label htmlFor={element.id}>{element.name}</Label>
              { element.type !== "radio" ? (
              <Input type={element.type} name={element.id} minLength={element.min_length} maxLength={element.max_length} pattern={element.pattern} onChange={(e) => handleDataChange(e.target.name, e.target.value)}/>
              ) : (
                <RadioWrapper>
                {element.answers.map(
                  answer => {
                    return(
                      <React.Fragment key={answer}>
                        <Input id={element.id + answer} radio type={element.type} name={element.id} onChange={() => handleDataChange(element.id, answer)}/>
                        <Label htmlFor={element.id + answer} name={element.id} radio>{answer}</Label>
                      </React.Fragment>
                    )
                  }
                )}
                </RadioWrapper>
              )}
            </Field>
          );
        })
      }
      <Button type="submit" as="button" colorstyle="full_green">Dalej</Button>
    </Form>
  )
};

export default RegisterForm;

