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
  margin-bottom: 30px;
  position: relative;
`;

const RadioWrapper = styled.div`
  display: flex;
`;

const Error = styled.p`
  display: ${(props) => props.error ? 'block' : 'none'};
  position: absolute;
  color: ${({theme}) => theme.colors.red};
  font-size: 12px;
  font-family: ${({theme}) => theme.font.main};
  height: 20px;
  min-width: 100px;
  top: 58px;
  left: 5px;
`;

const RegisterForm = ({dataFn}) => {

  const [company, setCompany] = useState({});
  const [errors, setError] = useState({});
  
  const handleDataChange = (key, value) => {
    setCompany({ ...company,
        [key]: value,
      }
    );
  };

  const validateNIP = (NIP) => {
    let result = 0;
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    weights.forEach((element,index) => {
      result += element * NIP[index];
    });
    if (NIP.length === 10 && parseInt(NIP, 10) > 0 && result%11 === parseInt(NIP[9])) return true;
    else return false;
    }

  const validateREGON = (REGON) => {
    if (REGON.length === 9) {
      let result = 0;
      const weights = [8, 9, 2, 3, 4, 5, 6, 7];
      weights.forEach((element,index) => {
        result += element * REGON[index];
      });
      if(result%11 === parseInt(REGON[8])) return true;
      else return false;
    } else if (REGON.length === 14) {
      let result = 0;
      const weights = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
      weights.forEach((element,index) => {
        result += element * REGON[index];
      });
      if((result%11 === parseInt(REGON[13])) || (result%11 === 10 && parseInt(REGON[13]) === 0)) return true;
      else return false;
    } else {
      return false;
    }
  }

  const validateFields = (e, company) => {
    e.preventDefault();
    let fieldsAreValid = false;
    const fieldsErrors = {
      NIP: false,
      REGON: false
    }
    if('NIP' in company) {
      if(validateNIP(company.NIP)) {
        fieldsAreValid = true;
        fieldsErrors.NIP = false;
      } else {
        fieldsAreValid = false; 
        fieldsErrors.NIP = true;
      };
    } else {
      fieldsAreValid = false; 
      fieldsErrors.NIP = true;
    }
    if('REGON' in company) {
      if(validateREGON(company.REGON)) {
        fieldsAreValid = true;
        fieldsErrors.REGON = false;
      } else {
        fieldsAreValid = false; 
        fieldsErrors.REGON = true;
      };
    } else {
      fieldsAreValid = false; 
      fieldsErrors.REGON = true;
    }
    setError(fieldsErrors);
    dataFn(company);
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
              <Input id={element.id} type={element.type} name={element.id} minLength={element.min_length} maxLength={element.max_length} pattern={element.pattern} onChange={(e) => handleDataChange(e.target.name, e.target.value)}/>
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
              <Error error={errors[element.id]}>{element.error}</Error>
            </Field>
          );
        })
      }
      <Button type="submit" as="button" colorstyle="full_green">Dalej</Button>
    </Form>
  )
};

export default RegisterForm;

