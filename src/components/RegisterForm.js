import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from "@reach/router";
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

  return(
    <Form>
      <Description>Żeby rozpocząć pracę z programem konieczne jest podanie kilku danych dotyczących Twojej działalności.</Description>
      {
        inputsArray.map((element,index) => {
          return(
            <Field key={index}>
              <Label htmlFor={element.id}>{element.name}</Label>
              { element.type !== "radio" ? (
              <Input type={element.type} name={element.id} onChange={(e) => handleDataChange(e.target.name, e.target.value)}/>
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
      <Button type="full_green" as={Link} to="financial" onClick={() => dataFn(company)}>Dalej</Button>
    </Form>
  )
};

export default RegisterForm;

